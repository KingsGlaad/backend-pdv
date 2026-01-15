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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashMovementService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const create_movement_dto_1 = require("./dto/create-movement.dto");
const enums_1 = require("../../generated/prisma/enums");
let CashMovementService = class CashMovementService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const session = await this.prisma.cashSession.findUnique({
            where: { id: dto.sessionId },
        });
        if (!session) {
            throw new common_1.NotFoundException('Sessão de caixa não encontrada.');
        }
        if (session.closedAt) {
            throw new common_1.BadRequestException('Não é possível realizar movimentações em um caixa fechado.');
        }
        if (dto.type === create_movement_dto_1.MovementType.WITHDRAW) {
            const aggregates = await this.prisma.cashMovement.groupBy({
                by: ['type'],
                where: { sessionId: dto.sessionId },
                _sum: { amount: true },
            });
            let currentBalance = Number(session.initialBalance);
            for (const agg of aggregates) {
                const val = Number(agg._sum.amount || 0);
                if (agg.type === enums_1.CashMovementType.SALE || agg.type === enums_1.CashMovementType.SUPPLY)
                    currentBalance += val;
                else if (agg.type === enums_1.CashMovementType.WITHDRAW)
                    currentBalance -= val;
            }
            if (Number(dto.amount) > currentBalance) {
                throw new common_1.BadRequestException(`Saldo insuficiente. Disponível: R$ ${currentBalance.toFixed(2)}`);
            }
        }
        return this.prisma.cashMovement.create({
            data: {
                sessionId: dto.sessionId,
                type: dto.type,
                amount: dto.amount,
                reason: dto.reason,
            },
        });
    }
    async findAll(filters) {
        const where = {};
        if (filters.startDate || filters.endDate) {
            where.createdAt = {};
            if (filters.startDate) {
                where.createdAt.gte = new Date(filters.startDate);
            }
            if (filters.endDate) {
                const end = new Date(filters.endDate);
                end.setHours(23, 59, 59, 999);
                where.createdAt.lte = end;
            }
        }
        return this.prisma.cashMovement.findMany({
            where,
            include: {
                session: {
                    include: {
                        user: true,
                        cashRegister: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
};
exports.CashMovementService = CashMovementService;
exports.CashMovementService = CashMovementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashMovementService);
//# sourceMappingURL=cash-movement.service.js.map