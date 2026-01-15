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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const close_order_dto_1 = require("./dto/close-order.dto");
const create_order_dto_1 = require("./dto/create-order.dto");
const add_item_dto_1 = require("./dto/add-item.dto");
const remove_item_dto_1 = require("./dto/remove-item.dto");
const call_waiter_dto_1 = require("./dto/call-waiter.dto");
const create_direct_sale_dto_1 = require("./dto/create-direct-sale.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let OrdersController = class OrdersController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(req, body) {
        const dto = create_order_dto_1.CreateOrderSchema.parse(body);
        return this.service.openOrder(req.user.id, dto.table, dto.number);
    }
    async listOpen() {
        return await this.service.findOpenOrders();
    }
    async getOne(id) {
        return this.service.findOne(id);
    }
    async createDirectSale(req, body) {
        const dto = create_direct_sale_dto_1.CreateDirectSaleSchema.parse(body);
        return this.service.createDirectSale(req.user.id, dto);
    }
    async addItem(id, body) {
        const dto = add_item_dto_1.AddItemSchema.parse(body);
        return this.service.addItem(id, dto.quantity, dto.productId);
    }
    async removeItem(id, itemId, body) {
        const { reason } = remove_item_dto_1.RemoveItemSchema.parse(body);
        return this.service.removeItem(id, itemId, reason);
    }
    async close(id, body) {
        const dto = close_order_dto_1.CloseOrderSchema.parse(body);
        return this.service.closeOrder(id, dto);
    }
    async callWaiter(body) {
        const { table } = call_waiter_dto_1.CallWaiterSchema.parse(body);
        return this.service.callWaiter(table);
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('open'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "listOpen", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('direct-sale'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createDirectSale", null);
__decorate([
    (0, common_1.Post)(':id/items'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "addItem", null);
__decorate([
    (0, common_1.Post)(':id/items/:itemId/remove'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "removeItem", null);
__decorate([
    (0, common_1.Post)(':id/close'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "close", null);
__decorate([
    (0, common_1.Post)('call-waiter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "callWaiter", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map