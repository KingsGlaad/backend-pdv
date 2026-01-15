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
exports.CashDrawerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CashDrawerService = class CashDrawerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllWithStatus() {
        const registers = await this.prisma.cashRegister.findMany({
            where: { isActive: true },
            include: {
                sessions: {
                    where: { closedAt: null },
                    orderBy: { openedAt: 'desc' },
                    take: 1,
                },
            },
            orderBy: { name: 'asc' },
        });
        const userIds = registers
            .map((reg) => reg.sessions[0]?.userId)
            .filter((id) => !!id);
        const userMap = new Map();
        if (userIds.length > 0) {
            const users = await this.prisma.user.findMany({
                where: { id: { in: userIds } },
                select: { id: true, name: true, role: true },
            });
            users.forEach((u) => userMap.set(u.id, u.name));
        }
        return registers.map((reg) => {
            const activeSession = reg.sessions[0];
            const operatorName = activeSession ? userMap.get(activeSession.userId) : null;
            return {
                id: reg.id,
                name: reg.name,
                isOpen: !!activeSession,
                currentSessionId: activeSession?.id || null,
                currentOperatorId: activeSession?.userId || null,
                currentOperatorName: operatorName || null,
                openedAt: activeSession?.openedAt || null,
            };
        });
    }
};
exports.CashDrawerService = CashDrawerService;
exports.CashDrawerService = CashDrawerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashDrawerService);
//# sourceMappingURL=cash-drawer.service.js.map