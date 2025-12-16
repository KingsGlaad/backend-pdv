import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CashSessionService {
  constructor(private prisma: PrismaService) {}

  async openSession(cashRegisterId: string, openedById: string, openingAmount: number) {
    const existing = await this.prisma.cashSession.findFirst({
      where: {
        cashRegisterId,
        status: 'OPEN',
      },
    });

    if (existing) {
      throw new BadRequestException('Já existe um caixa aberto');
    }

    return this.prisma.cashSession.create({
      data: {
        cashRegisterId,
        openedById,
        openingAmount,
      },
    });
  }

  async closeSession(cashSessionId: string, closingAmount: number) {
    const session = await this.prisma.cashSession.findUnique({
      where: { id: cashSessionId },
      include: { movements: true },
    });

    if (!session || session.status !== 'OPEN') {
      throw new BadRequestException('Caixa inválido ou já fechado');
    }

    const totalMovements = session.movements.reduce((acc, m) => acc + Number(m.amount), 0);

    const expectedAmount = Number(session.openingAmount) + totalMovements;

    const diff = closingAmount - expectedAmount;

    return this.prisma.$transaction(async (tx) => {
      if (diff !== 0) {
        await tx.cashMovement.create({
          data: {
            cashSessionId,
            type: 'ADJUSTMENT',
            amount: diff,
            referenceId: 'CLOSE_DIFF',
          },
        });
      }

      return tx.cashSession.update({
        where: { id: cashSessionId },
        data: {
          closingAmount,
          status: 'CLOSED',
          closedAt: new Date(),
        },
      });
    });
  }
}
