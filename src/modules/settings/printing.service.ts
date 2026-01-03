import { Injectable, Logger } from '@nestjs/common';
import { exec } from 'child_process';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { promisify } from 'util';
import { ReceiptGenerator } from './receipt.generator';
import { SettingsService } from './settings.service';

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

      const content = generator.generate(saleWithDetails, printerWidth);

      // Create a temp file
      const filename = `receipt_${Date.now()}.txt`;
      const filePath = join(tmpdir(), filename);

      await writeFile(filePath, content, { encoding: 'utf8' });

      // Use PowerShell to print
      // Out-Printer -Name "PrinterName" -InputObject (Get-Content "Path")
      // Need to handle spaces in printer name
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
}
