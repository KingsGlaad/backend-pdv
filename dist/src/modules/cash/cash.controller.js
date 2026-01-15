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
exports.CashController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const cash_session_service_1 = require("./cash-session.service");
const cash_movement_service_1 = require("./cash-movement.service");
const cash_drawer_service_1 = require("./cash-drawer.service");
const open_session_dto_1 = require("./dto/open-session.dto");
const close_session_dto_1 = require("./dto/close-session.dto");
const create_movement_dto_1 = require("./dto/create-movement.dto");
let CashController = class CashController {
    sessionService;
    movementService;
    drawerService;
    constructor(sessionService, movementService, drawerService) {
        this.sessionService = sessionService;
        this.movementService = movementService;
        this.drawerService = drawerService;
    }
    async getRegisters() {
        return this.drawerService.findAllWithStatus();
    }
    async getStatus(req) {
        const session = await this.sessionService.getActiveSession(req.user.id);
        return {
            isOpen: !!session,
            session: session,
        };
    }
    async openSession(req, dto) {
        return this.sessionService.openSession(req.user.id, dto);
    }
    async closeSession(req, dto) {
        return this.sessionService.closeSession(req.user.id, dto);
    }
    async createMovement(req, dto) {
        return this.movementService.create(req.user.id, dto);
    }
    async getFlow(req) {
        const query = req.query;
        return this.movementService.findAll({
            startDate: query.startDate,
            endDate: query.endDate,
        });
    }
};
exports.CashController = CashController;
__decorate([
    (0, common_1.Get)('registers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CashController.prototype, "getRegisters", null);
__decorate([
    (0, common_1.Get)('status'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CashController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Post)('open'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, open_session_dto_1.OpenSessionDto]),
    __metadata("design:returntype", Promise)
], CashController.prototype, "openSession", null);
__decorate([
    (0, common_1.Post)('close'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, close_session_dto_1.CloseSessionDto]),
    __metadata("design:returntype", Promise)
], CashController.prototype, "closeSession", null);
__decorate([
    (0, common_1.Post)('movement'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_movement_dto_1.CreateMovementDto]),
    __metadata("design:returntype", Promise)
], CashController.prototype, "createMovement", null);
__decorate([
    (0, common_1.Get)('flow'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CashController.prototype, "getFlow", null);
exports.CashController = CashController = __decorate([
    (0, common_1.Controller)('cash'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [cash_session_service_1.CashSessionService,
        cash_movement_service_1.CashMovementService,
        cash_drawer_service_1.CashDrawerService])
], CashController);
//# sourceMappingURL=cash.controller.js.map