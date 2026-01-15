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
exports.CashSessionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CashSessionService = class CashSessionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async openSession(userId, dto) {
        const register = await this.prisma.cashRegister.findUnique({
            where: { id: dto.cashRegisterId },
        });
        if (!register) {
            throw new common_1.NotFoundException('Caixa não encontrado.');
        }
        const activeSession = await this.prisma.cashSession.findFirst({
            where: {
                cashRegisterId: dto.cashRegisterId,
                closedAt: null,
            },
        });
        if (activeSession) {
            throw new common_1.BadRequestException('Este caixa já possui uma sessão aberta.');
        }
        return this.prisma.$transaction(async (tx) => {
            const session = await tx.cashSession.create({
                data: {
                    cashRegisterId: dto.cashRegisterId,
                    userId: userId,
                    initialBalance: dto.initialBalance,
                    status: 'OPEN',
                },
            });
            await tx.cashDrawerLog.create({
                data: {
                    cashRegisterId: dto.cashRegisterId,
                    userId: userId,
                    action: 'OPEN',
                    description: `Abertura de caixa. Fundo de troco: R$ ${dto.initialBalance.toFixed(2)}`,
                },
            });
            return session;
        });
    }
    async closeSession(userId, dto) {
        const session = await this.prisma.cashSession.findUnique({
            where: { id: dto.sessionId },
            include: {
                movements: true,
                sales: true,
            },
        });
        if (!session) {
            throw new common_1.NotFoundException('Sessão não encontrada.');
        }
        if (session.closedAt) {
            throw new common_1.BadRequestException('Esta sessão já está fechada.');
        }
        const initialBalance = Number(session.initialBalance);
        const paymentsInSession = await this.prisma.payment.findMany({
            where: {
                sale: {
                    cashSessionId: dto.sessionId,
                },
                method: 'CASH',
            },
        });
        const cashTotal = paymentsInSession.reduce((acc, p) => acc + Number(p.amount), 0);
        const supplies = session.movements
            .filter((m) => m.type === 'SUPPLY')
            .reduce((acc, m) => acc + Number(m.amount), 0);
        const bleeds = session.movements
            .filter((m) => m.type === 'WITHDRAW')
            .reduce((acc, m) => acc + Number(m.amount), 0);
        const systemBalance = initialBalance + cashTotal + supplies - bleeds;
        const difference = dto.finalBalance - systemBalance;
        return this.prisma.$transaction(async (tx) => {
            const closedSession = await tx.cashSession.update({
                where: { id: dto.sessionId },
                data: {
                    closedAt: new Date(),
                    finalBalance: dto.finalBalance,
                    systemBalance: systemBalance,
                    difference: difference,
                    status: 'CLOSED',
                },
            });
            const closerUser = await tx.user.findUnique({
                where: { id: userId },
                select: { name: true, role: true },
            });
            await tx.cashDrawerLog.create({
                data: {
                    cashRegisterId: session.cashRegisterId,
                    userId: userId,
                    action: 'CLOSE',
                    description: `Fecho por ${closerUser?.name} (${closerUser?.role}). Físico: ${dto.finalBalance} | Sistema: ${systemBalance} | Dif: ${difference.toFixed(2)}`,
                },
            });
            return closedSession;
        });
    }
    async getActiveSession(userId) {
        return this.prisma.cashSession.findFirst({
            where: {
                userId: userId,
                closedAt: null,
            },
            include: {
                cashRegister: true,
            },
        });
    }
};
exports.CashSessionService = CashSessionService;
exports.CashSessionService = CashSessionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashSessionService);
//# sourceMappingURL=cash-session.service.js.map