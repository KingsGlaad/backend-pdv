import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMovementDto, MovementType } from './dto/create-movement.dto';

@Injectable()
export class CashMovementService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateMovementDto) {
    // 1. Verifica se a sessão existe e está aberta
    const session = await this.prisma.cashSession.findUnique({
      where: { id: dto.sessionId },
    });

    if (!session) {
      throw new NotFoundException('Sessão de caixa não encontrada.');
    }

    if (session.closedAt) {
      throw new BadRequestException('Não é possível realizar movimentações em um caixa fechado.');
    }

    // 2. Se for sangria, verifica se tem saldo suficiente (Opcional, mas recomendado)
    if (dto.type === MovementType.WITHDRAW) {
      const aggregates = await this.prisma.cashMovement.groupBy({
        by: ['type'],
        where: { cashSessionId: dto.sessionId },
        _sum: { amount: true },
      });

      let currentBalance = Number(session.openingAmount);

      for (const agg of aggregates) {
        const val = Number(agg._sum.amount || 0);
        if (agg.type === MovementType.SALE || agg.type === MovementType.SUPPLY)
          currentBalance += val;
        else if (agg.type === MovementType.WITHDRAW) currentBalance -= val;
      }

      if (Number(dto.amount) > currentBalance) {
        throw new BadRequestException(
          `Saldo insuficiente. Disponível: R$ ${currentBalance.toFixed(2)}`,
        );
      }
    }

    // 3. Cria a movimentação
    return this.prisma.cashMovement.create({
      data: {
        cashSessionId: dto.sessionId,
        type: dto.type as any,
        amount: dto.amount,
        // userId: userId, // Se quiser rastrear quem fez a sangria especificamente
      },
    });
  }
}
