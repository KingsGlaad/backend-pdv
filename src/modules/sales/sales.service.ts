import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { GetSalesFilterDto } from './dto/get-sales-filter.dto';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async findAll(filters: GetSalesFilterDto) {
    const { page = 1, limit = 10, search, startDate, endDate, userId } = filters;
    const skip = (page - 1) * limit;

    const where: any = {
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
        take: Number(limit), // Ensure it's a number
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

  async getStats(startDate?: string, endDate?: string) {
    const where: any = { status: 'COMPLETED' };

    if (startDate) {
      where.createdAt = {
        gte: new Date(startDate),
        ...(endDate && { lte: new Date(endDate) }),
      };
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      where.createdAt = { gte: today };
    }

    const salesAgg = await this.prisma.sale.aggregate({
      where,
      _sum: { finalAmount: true },
      _count: { id: true },
    });

    const averageTicket =
      salesAgg._count.id > 0
        ? (salesAgg._sum.finalAmount?.toNumber() || 0) / salesAgg._count.id
        : 0;

    return {
      totalAmount: salesAgg._sum.finalAmount || 0,
      count: salesAgg._count.id || 0,
      averageTicket,
    };
  }

  async getSalesChart(startDate?: string, endDate?: string) {
    const end = endDate ? new Date(endDate) : new Date();
    const start = startDate ? new Date(startDate) : new Date(new Date().setDate(end.getDate() - 7)); // Default to 7 days

    // Ensure start/end cover full days
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);

    const data = await this.prisma.$queryRaw<{ date: string; total: unknown }[]>`
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

    // Parse decimals to numbers for JSON serialization
    return data.map((item) => ({
      date: item.date,
      total: Number(item.total),
    }));
  }
}
