import { Controller, Post, Param, Body, UseGuards, Request, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CloseOrderSchema } from './dto/close-order.dto';
import { CreateOrderSchema } from './dto/create-order.dto';
import { AddItemSchema } from './dto/add-item.dto';
import { RemoveItemSchema } from './dto/remove-item.dto';
import { CallWaiterSchema } from './dto/call-waiter.dto';
import { CreateDirectSaleSchema } from './dto/create-direct-sale.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Post()
  async create(@Request() req, @Body() body: unknown) {
    const dto = CreateOrderSchema.parse(body);
    return this.service.openOrder(req.user.id, dto.table, dto.number);
  }

  @Get('open')
  async listOpen() {
    return await this.service.findOpenOrders();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post('direct-sale')
  async createDirectSale(@Request() req, @Body() body: unknown) {
    const dto = CreateDirectSaleSchema.parse(body);
    return this.service.createDirectSale(req.user.id, dto);
  }

  @Post(':id/items')
  async addItem(@Param('id') id: string, @Body() body: unknown) {
    const dto = AddItemSchema.parse(body);
    return this.service.addItem(id, dto.quantity, dto.productId);
  }

  @Post(':id/items/:itemId/remove')
  async removeItem(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
    @Body() body: unknown,
  ) {
    const { reason } = RemoveItemSchema.parse(body);
    return this.service.removeItem(id, itemId, reason);
  }

  @Post(':id/close')
  async close(@Param('id') id: string, @Body() body: unknown) {
    const dto = CloseOrderSchema.parse(body);
    return this.service.closeOrder(id, dto);
  }

  @Post('call-waiter')
  async callWaiter(@Body() body: unknown) {
    const { table } = CallWaiterSchema.parse(body);
    return this.service.callWaiter(table);
  }
}
