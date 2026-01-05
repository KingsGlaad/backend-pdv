import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { ReceiptGenerator } from './receipt.generator';
import { SettingsService } from '../settings/settings.service';
import { Printer } from 'escpos';
import Serial from 'escpos-serialport';
import Network from 'escpos-network';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrinterConfigDto } from './dto/printer-config.dto';

const execAsync = promisify(exec);

// Custom Adapter to capture buffer for Spooler printing
class BufferAdapter {
  public buffer = Buffer.alloc(0);

  open(callback?: (error?: any) => void) {
    if (callback) callback();
    return this;
  }

  close(callback?: (error?: any) => void, options?: any) {
    if (callback) callback();
    return this;
  }

  write(data: Buffer, callback?: (error?: any) => void) {
    this.buffer = Buffer.concat([this.buffer, data]);
    if (callback) callback();
    return this;
  }

  read(callback?: (data: Buffer) => void) {
    // No-op
    return this;
  }
}

@Injectable()
export class PrinterService {
  private readonly logger = new Logger(PrinterService.name);

  constructor(
    private readonly settingsService: SettingsService,
    private readonly prisma: PrismaService,
  ) {}

  async getAvailablePrinters() {
    try {
      // PowerShell command to list printers
      const { stdout } = await execAsync('powershell "Get-Printer | Select-Object Name"');

      // Parse output: split by lines, remove header/separator, trim
      const printers = stdout
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && line !== 'Name' && !line.startsWith('----'));

      return printers;
    } catch (error) {
      this.logger.error('Error fetching printers:', error);
      return [];
    }
  }

  async getPrinterConfigs() {
    return await this.prisma.printerConfig.findMany();
  }

  async getPrinterConfig(terminalId: string) {
    return await this.prisma.printerConfig.findUnique({
      where: { terminalId },
    });
  }

  async savePrinterConfig(dto: PrinterConfigDto) {
    return await this.prisma.printerConfig.upsert({
      where: { terminalId: dto.terminalId },
      update: dto,
      create: dto,
    });
  }

  async printReceipt(
    printerName: string,
    printerWidth: number,
    sale: any,
    items: any[],
    payments: any[],
  ) {
    try {
      const appConfig = await this.settingsService.getSettings();
      // Need dummy printerConfig for width?
      const printerConfig = { width: printerWidth } as any;
      const generator = new ReceiptGenerator(appConfig || undefined, printerConfig);

      // Construct the SaleWithDetails object expected by generator
      const saleWithDetails = {
        ...sale,
        items,
        payments,
      };

      // Determine Adapter
      let device: any;
      let isBufferAdapter = false;

      if (/^COM\d+$/i.test(printerName)) {
        device = new Serial(printerName, { baudRate: 9600 });
      } else if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(printerName)) {
        // Network IP
        device = new Network(printerName, 9100);
      } else {
        // Spooler / Windows Printer
        device = new BufferAdapter();
        isBufferAdapter = true;
      }

      const printer = new Printer(device);

      const doPrint = async () => {
        return new Promise<void>(async (resolve, reject) => {
          device.open(async (err) => {
            if (err) {
              reject(err);
              return;
            }
            try {
              await generator.printSale(printer, saleWithDetails);
              resolve();
            } catch (e) {
              reject(e);
            }
            // generator.printSale closes the printer, but for BufferAdapter close just returns.
          });
        });
      };

      await doPrint();

      if (isBufferAdapter) {
        const adapter = device as BufferAdapter;
        const buffer = adapter.buffer;
        if (buffer.length > 0) {
          await this.printBufferToSpooler(printerName, buffer);
        }
      }

      return true;
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Printing failed: ${err.message}`, err.stack);
      return false;
    }
  }

  async testPrinter(config: PrinterConfigDto): Promise<boolean> {
    try {
      const width = config.width === 58 ? 32 : config.width === 80 ? 48 : 40;
      const appConfig = await this.settingsService.getSettings();
      const generator = new ReceiptGenerator(appConfig || undefined, { width } as any);

      // Same adapter logic
      let device: any;
      let isBufferAdapter = false;
      const printerName = config.printerName;

      if (/^COM\d+$/i.test(printerName)) {
        device = new Serial(printerName, { baudRate: 9600 });
      } else if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(printerName)) {
        device = new Network(printerName, 9100);
      } else {
        device = new BufferAdapter();
        isBufferAdapter = true;
      }

      const printer = new Printer(device);

      const doPrint = async () => {
        return new Promise<void>(async (resolve, reject) => {
          device.open(async (err) => {
            if (err) {
              reject(err);
              return;
            }
            try {
              await generator.printTest(printer);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        });
      };

      await doPrint();

      if (isBufferAdapter) {
        const adapter = device as BufferAdapter;
        const buffer = adapter.buffer;
        if (buffer.length > 0) {
          await this.printBufferToSpooler(printerName, buffer);
        }
      }

      return true;
    } catch (e) {
      this.logger.error('Test print failed', e);
      return false;
    }
  }

  private async printBufferToSpooler(printerName: string, buffer: Buffer) {
    // Create a temp file
    const filename = `receipt_${Date.now()}.bin`; // .bin for raw?
    const filePath = join(tmpdir(), filename);

    await writeFile(filePath, buffer);

    const command = `powershell -Command "Get-Content '${filePath}' | Out-Printer -Name '${printerName}'"`;

    this.logger.log(`Executing Spooler command for printer: ${printerName}`);
    await execAsync(command);
    this.logger.log(`Spooler job sent to ${printerName}`);

    // Cleanup
    try {
      await unlink(filePath);
    } catch (e) {
      this.logger.warn(`Failed to delete temp receipt file: ${filePath}`);
    }
  }

  // Keeping this for reference or complex raw printing if needed later
  async printSaleById(saleId: string, terminalId?: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id: saleId },
      include: {
        items: { include: { product: true } },
        payments: true,
      },
    });

    if (!sale) {
      throw new Error('Venda não encontrada');
    }

    let printerConfig: { printerName: string; width: number } | null = null;
    if (terminalId) {
      const config = await this.prisma.printerConfig.findUnique({
        where: { terminalId },
      });
      if (config) {
        printerConfig = { printerName: config.printerName, width: config.width };
      }
    }

    if (!printerConfig) {
      // Fallback
      const config = await this.prisma.printerConfig.findFirst({
        where: { enabled: true },
      });
      if (config) {
        printerConfig = { printerName: config.printerName, width: config.width };
      }
    }

    if (!printerConfig) {
      throw new Error('Nenhuma impressora configurada');
    }

    return this.printReceipt(
      printerConfig.printerName,
      printerConfig.width || 80,
      sale,
      sale.items,
      sale.payments,
    );
  }

  async printRequest(type: string, destination: string) {
    const config: PrinterConfigDto = {
      terminalId: 'manual-request',
      printerName: destination,
      printerType: 'thermal',
      connection: type,
      width: 80,
      enabled: true,
    };
    return this.testPrinter(config);
  }
}
