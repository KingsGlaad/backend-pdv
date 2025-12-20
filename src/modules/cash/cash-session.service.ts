import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OpenSessionDto } from './dto/open-session.dto';
import { CloseSessionDto } from './dto/close-session.dto';

@Injectable()
export class CashSessionService {
  constructor(private prisma: PrismaService) {}

  async openSession(userId: string, dto: OpenSessionDto) {
    const register = await this.prisma.cashRegister.findUnique({
      where: { id: dto.cashRegisterId },
    });

    if (!register) {
      throw new NotFoundException('Caixa não encontrado.');
    }

    const activeSession = await this.prisma.cashSession.findFirst({
      where: {
        cashRegisterId: dto.cashRegisterId,
        closedAt: null,
      },
    });

    if (activeSession) {
      throw new BadRequestException('Este caixa já possui uma sessão aberta.');
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

  async closeSession(userId: string, dto: CloseSessionDto) {
    // 1. Buscar a sessão e dados relacionados para cálculo
    const session = await this.prisma.cashSession.findUnique({
      where: { id: dto.sessionId },
      include: {
        movements: true,
        sales: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Sessão não encontrada.');
    }

    if (session.closedAt) {
      throw new BadRequestException('Esta sessão já está fechada.');
    }

    // 2. Calcular Saldo Esperado (Apenas Dinheiro Físico)
    const initialBalance = Number(session.initialBalance);

    // Filtra vendas onde o pagamento foi em dinheiro ('CASH')
    // CORREÇÃO: Calcular basedo nos MOVEMENTS de tipo SALE que vieram de pagamentos CASH.
    // Como saber se o movement é CASH? O movement não tem tipo de pagamento. O Payment tem.
    // Mas o log de fechamento diz "Valor em Dinheiro (Físico)".
    // Se gravamos movimentos para TUDO, precisamos saber quais sao CASH.
    // Alternativa: filtrar os movements onde a razao contem "(CASH)" ou mudar a logica.
    // MELHOR FORMA AGORA: Somar os payments que são CASH desta sessão.

    // Vamos buscar os pagamentos desta sessão.
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
      .filter((m) => m.type === 'WITHDRAW') // Enum is WITHDRAW? Schema says WITHDRAW.
      .reduce((acc, m) => acc + Number(m.amount), 0);

    // Fórmula: (Inicial + Vendas Dinheiro + Suprimentos) - Sangrias
    const systemBalance = initialBalance + cashTotal + supplies - bleeds;

    // Diferença (Quebra de Caixa)
    const difference = dto.finalBalance - systemBalance;

    // 3. Transação de Fecho
    return this.prisma.$transaction(async (tx) => {
      // Atualiza a sessão com os valores finais
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

      // Identifica quem está a fechar (pode ser Admin fechando caixa de outro)
      const closerUser = await tx.user.findUnique({
        where: { id: userId },
        select: { name: true, role: true },
      });

      // Log de Auditoria Detalhado
      await tx.cashDrawerLog.create({
        data: {
          cashRegisterId: session.cashRegisterId,
          userId: userId, // ID de quem executou a ação
          action: 'CLOSE',
          description: `Fecho por ${closerUser?.name} (${closerUser?.role}). Físico: ${dto.finalBalance} | Sistema: ${systemBalance} | Dif: ${difference.toFixed(2)}`,
        },
      });

      return closedSession;
    });
  }

  async getActiveSession(userId: string) {
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
}
