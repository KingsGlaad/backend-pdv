import { Module, Global } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsController } from './events.controller';

@Global()
@Module({
  controllers: [EventsController],
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class EventsModule {}
