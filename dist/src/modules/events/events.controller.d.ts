import { EventsGateway } from './events.gateway';
export declare class EventsController {
    private readonly eventsGateway;
    constructor(eventsGateway: EventsGateway);
    handleOrderUpdate(data: any): void;
    handleOrderCreate(data: any): void;
}
