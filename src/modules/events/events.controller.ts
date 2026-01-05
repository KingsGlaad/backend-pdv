import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EventsGateway } from './events.gateway';

@Controller()
export class EventsController {
  constructor(private readonly eventsGateway: EventsGateway) {}

  @EventPattern('orders.updated')
  handleOrderUpdate(@Payload() data: any) {
    this.eventsGateway.sendToAll('orders:update', data);
  }

  @EventPattern('orders.created')
  handleOrderCreate(@Payload() data: any) {
    this.eventsGateway.sendToAll('orders:create', data);
  }
}
