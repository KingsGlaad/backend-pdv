import { Controller, Get, Query } from '@nestjs/common';
import { SalesService } from './sales.service';
import { GetSalesFilterDto } from './dto/get-sales-filter.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async findAll(@Query() filters: GetSalesFilterDto) {
    return this.salesService.findAll(filters);
  }

  @Get('stats')
  async getStats(@Query('startDate') startDate?: string, @Query('endDate') endDate?: string) {
    return this.salesService.getStats(startDate, endDate);
  }

  @Get('chart')
  async getChart(@Query('startDate') startDate?: string, @Query('endDate') endDate?: string) {
    return this.salesService.getSalesChart(startDate, endDate);
  }
}
