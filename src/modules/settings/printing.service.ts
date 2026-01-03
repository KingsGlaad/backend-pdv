import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { ReceiptGenerator } from './receipt.generator';
import { SettingsService } from './settings.service';
import { SerialPort } from 'serialport';

const execAsync = promisify(exec);

@Injectable()
export class PrintingService {
  private readonly logger = new Logger(PrintingService.name);

  constructor(private readonly settingsService: SettingsService) {}

  async printReceipt(
    printerName: string,
    printerWidth: number,
    sale: any,
    items: any[],
    payments: any[],
  ) {
    try {
      const appConfig = await this.settingsService.getSettings();
      const generator = new ReceiptGenerator(appConfig || undefined);

      // Construct the SaleWithDetails object expected by generator
      const saleWithDetails = {
        ...sale,
        items,
        payments,
      };

      // Check if printer is a COM port (e.g., COM1, COM2)
      if (/^COM\d+$/i.test(printerName)) {
        return this.printToSerialPort(printerName, printerWidth, saleWithDetails, generator);
      }

      // Default to Windows Printer Spooler logic
      const content = generator.generate(saleWithDetails, printerWidth);

      // Create a temp file
      const filename = `receipt_${Date.now()}.txt`;
      const filePath = join(tmpdir(), filename);

      await writeFile(filePath, content, { encoding: 'utf8' });

      // Use PowerShell to print
      const command = `powershell -Command "Get-Content '${filePath}' | Out-Printer -Name '${printerName}'"`;

      this.logger.log(`Executing print command for printer: ${printerName}`);
      await execAsync(command);

      this.logger.log(`Print job sent successfully to ${printerName}`);

      // Cleanup
      try {
        await unlink(filePath);
      } catch (e) {
        this.logger.warn(`Failed to delete temp receipt file: ${filePath}`);
      }

      return true;
    } catch (error) {
      const err = error as Error;
      this.logger.error(`Printing failed: ${err.message}`, err.stack);
      return false;
    }
  }

  private async printToSerialPort(
    portName: string,
    width: number,
    sale: any,
    generator: ReceiptGenerator,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.logger.log(`Attempting to print to Serial Port: ${portName}`);

      const port = new SerialPort({
        path: portName,
        baudRate: 9600, // Standard default, might need config later
        autoOpen: false,
      });

      port.open((err) => {
        if (err) {
          this.logger.error(`Error opening serial port ${portName}: ${err.message}`);
          // Don't reject, just return false so we don't crash app logic
          resolve(false);
          return;
        }

        const buffer = generator.generateEscPos(sale, width);

        port.write(buffer, (err) => {
          if (err) {
            this.logger.error(`Error writing to serial port ${portName}: ${err.message}`);
            port.close();
            resolve(false);
            return;
          }

          // Wait for drain? usually not needed for small receipts but safely close after a small delay or drain
          port.drain(() => {
            port.close((err) => {
              if (err) {
                this.logger.warn(`Error closing port ${portName}: ${err.message}`);
              }
              this.logger.log(`Printed successfully to ${portName}`);
              resolve(true);
            });
          });
        });
      });
    });
  }
}
