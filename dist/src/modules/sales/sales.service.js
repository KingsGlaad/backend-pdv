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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SalesService = class SalesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        const { page = 1, limit = 10, search, startDate, endDate, userId } = filters;
        const skip = (page - 1) * limit;
        const where = {
            status: 'COMPLETED',
        };
        if (startDate) {
            where.createdAt = {
                gte: new Date(startDate),
                ...(endDate && { lte: new Date(endDate) }),
            };
        }
        if (userId) {
            where.userId = userId;
        }
        if (search) {
            where.OR = [{ user: { name: { contains: search, mode: 'insensitive' } } }];
        }
        const [sales, total] = await Promise.all([
            this.prisma.sale.findMany({
                where,
                skip,
                take: Number(limit),
                orderBy: { createdAt: 'desc' },
                include: {
                    user: { select: { name: true } },
                    payments: true,
                },
            }),
            this.prisma.sale.count({ where }),
        ]);
        return {
            data: sales,
            meta: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async getStats(startDate, endDate) {
        const where = { status: 'COMPLETED' };
        if (startDate) {
            where.createdAt = {
                gte: new Date(startDate),
                ...(endDate && { lte: new Date(endDate) }),
            };
        }
        else {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            where.createdAt = { gte: today };
        }
        const salesAgg = await this.prisma.sale.aggregate({
            where,
            _sum: { finalAmount: true },
            _count: { id: true },
        });
        const averageTicket = salesAgg._count.id > 0
            ? (salesAgg._sum.finalAmount?.toNumber() || 0) / salesAgg._count.id
            : 0;
        return {
            totalAmount: salesAgg._sum.finalAmount || 0,
            count: salesAgg._count.id || 0,
            averageTicket,
        };
    }
    async getSalesChart(startDate, endDate) {
        const end = endDate ? new Date(endDate) : new Date();
        const start = startDate ? new Date(startDate) : new Date(new Date().setDate(end.getDate() - 7));
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        const data = await this.prisma.$queryRaw `
      SELECT
        TO_CHAR("createdAt", 'YYYY-MM-DD') as date,
        SUM("finalAmount") as total
      FROM "Sale"
      WHERE "status" = 'COMPLETED'
      AND "createdAt" >= ${start}
      AND "createdAt" <= ${end}
      GROUP BY TO_CHAR("createdAt", 'YYYY-MM-DD')
      ORDER BY date ASC
    `;
        return data.map((item) => ({
            date: item.date,
            total: Number(item.total),
        }));
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalesService);
//# sourceMappingURL=sales.service.js.map