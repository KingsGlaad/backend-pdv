import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CashDrawerService {
  constructor(private prisma: PrismaService) {}

  async findAllWithStatus() {
    // 1. Buscar todos os caixas e suas sessões ativas
    const registers = await this.prisma.cashRegister.findMany({
      where: { active: true },
      include: {
        sessions: {
          where: { closedAt: null }, // Apenas sessões abertas
          orderBy: { openedAt: 'desc' },
          take: 1, // Pega a mais recente
        },
      },
      orderBy: { name: 'asc' },
    });

    // 2. Extrair IDs únicos de usuários das sessões ativas
    const userIds = registers
      .map((reg) => reg.sessions[0]?.openedById)
      .filter((id): id is string => !!id); // Remove null/undefined

    // 3. Buscar nomes dos usuários em lote (apenas uma consulta)
    const userMap = new Map<string, string>();

    if (userIds.length > 0) {
      const users = await this.prisma.user.findMany({
        where: { id: { in: userIds } },
        select: { id: true, name: true, role: true },
      });

      // Cria mapa: ID -> Nome
      users.forEach((u) => userMap.set(u.id, u.name));
    }

    // 4. Montar DTO de resposta
    return registers.map((reg) => {
      const activeSession = reg.sessions[0];
      const operatorName = activeSession ? userMap.get(activeSession.openedById) : null;

      return {
        id: reg.id,
        name: reg.name,
        isOpen: !!activeSession,
        currentSessionId: activeSession?.id || null,
        currentOperatorId: activeSession?.openedById || null,
        currentOperatorName: operatorName || null,
        openedAt: activeSession?.openedAt || null,
      };
    });
  }
}
