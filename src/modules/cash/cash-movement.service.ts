import { Injectable } from '@nestjs/common';
import { CashMovementType, PaymentMethod } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CashMovementService {
  constructor(private prisma: PrismaService) {}

  async createMovement(
    cashSessionId: string,
    type: CashMovementType,
    amount: number,
    method?: PaymentMethod,
    referenceId?: string,
  ) {
    return this.prisma.cashMovement.create({
      data: {
        cashSessionId,
        type,
        amount,
        method,
        referenceId,
      },
    });
  }
}
