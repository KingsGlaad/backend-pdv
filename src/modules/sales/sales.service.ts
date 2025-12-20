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
}
