import { Injectable } from '@nestjs/common';
import { DrawerOpenReason } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CashDrawerService {
  constructor(private prisma: PrismaService) {}

  async logDrawerOpen(cashSessionId: string, reason: DrawerOpenReason, description?: string) {
    return await this.prisma.cashDrawerLog.create({
      data: {
        cashSessionId,
        reason,
        description,
      },
    });
  }
}
