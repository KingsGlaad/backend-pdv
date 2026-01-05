import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PrinterService } from './printer.service';
import { PrinterConfigDto } from './dto/printer-config.dto';

@Controller('printer')
export class PrinterController {
  constructor(private readonly printerService: PrinterService) {}

  @Post('print')
  async print(@Body() data: { ip: string }) {
    await this.printerService.printRequest('network', data.ip);
    return { message: 'Comando enviado ao emulador' };
  }

  @Get('available')
  async getAvailablePrinters() {
    return this.printerService.getAvailablePrinters();
  }

  @Get('configs')
  async getPrinterConfigs() {
    return await this.printerService.getPrinterConfigs();
  }

  @Get('config/:terminalId')
  async getPrinterConfig(@Param('terminalId') terminalId: string) {
    return this.printerService.getPrinterConfig(terminalId);
  }

  @Post('config')
  async savePrinterConfig(@Body() dto: PrinterConfigDto) {
    return this.printerService.savePrinterConfig(dto);
  }

  @Post('test')
  async testPrinter(@Body() dto: PrinterConfigDto) {
    return this.printerService.testPrinter(dto);
  }
  @Post('reprint/:id')
  async reprintSale(@Param('id') id: string, @Body() body: { terminalId?: string }) {
    return this.printerService.printSaleById(id, body.terminalId);
  }
}
