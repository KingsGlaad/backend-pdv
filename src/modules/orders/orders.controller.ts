// src/modules/orders/orders.controller.ts
import { Controller, Post, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CloseOrderSchema } from './dto/close-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Post(':id/close')
  async close(@Param('id') id: string, @Body() body: unknown) {
    const dto = CloseOrderSchema.parse(body);
    return this.service.closeOrder(id, dto);
  }
}
