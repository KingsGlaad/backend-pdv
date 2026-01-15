"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const events_gateway_1 = require("./events.gateway");
let EventsController = class EventsController {
    eventsGateway;
    constructor(eventsGateway) {
        this.eventsGateway = eventsGateway;
    }
    handleOrderUpdate(data) {
        this.eventsGateway.sendToAll('orders:update', data);
    }
    handleOrderCreate(data) {
        this.eventsGateway.sendToAll('orders:create', data);
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, microservices_1.EventPattern)('orders.updated'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "handleOrderUpdate", null);
__decorate([
    (0, microservices_1.EventPattern)('orders.created'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "handleOrderCreate", null);
exports.EventsController = EventsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [events_gateway_1.EventsGateway])
], EventsController);
//# sourceMappingURL=events.controller.js.map