import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OpenSessionDto } from './dto/open-session.dto';
import { CloseSessionDto } from './dto/close-session.dto';

@Injectable()
export class CashSessionService {
  constructor(private prisma: PrismaService) {}

  async openSession(userId: string, dto: OpenSessionDto) {
    // 1. Verifica se o caixa existe
    const register = await this.prisma.cashRegister.findUnique({
      where: { id: dto.cashRegisterId },
    });

    if (!register) {
      throw new NotFoundException('Caixa não encontrado.');
    }

    // 2. Verifica se já existe uma sessão aberta para este caixa
    const openSession =
      (await this.prisma.cashSession.findFirst({
        where: {
          cashRegisterId: dto.cashRegisterId,
          closedAt: null,
        },
      })) || null;

    if (openSession) {
      throw new BadRequestException('Este caixa já possui uma sessão aberta.');
    }

    // 3. Cria a sessão
    return this.prisma.cashSession.create({
      data: {
        cashRegisterId: dto.cashRegisterId,
        openedById: userId,
        openingAmount: dto.initialBalance,
        status: 'OPEN',
      },
    });
  }

  async closeSession(userId: string, dto: CloseSessionDto) {
    // 1. Busca a sessão
    const session = await this.prisma.cashSession.findUnique({
      where: { id: dto.sessionId },
      include: {
        movements: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Sessão não encontrada.');
    }

    if (session.closedAt) {
      throw new BadRequestException('Esta sessão já está fechada.');
    }

    // 2. Calcular o saldo esperado do sistema
    // Saldo Inicial
    const initial = Number(session.openingAmount);

    // Total de Vendas (Baseado nas movimentações registradas como SALE)
    const salesTotal = session.movements
      .filter((m) => m.type === 'SALE')
      .reduce((acc, m) => acc + Number(m.amount), 0);

    // Movimentações
    const supplies = session.movements
      .filter((m) => m.type === 'SUPPLY')
      .reduce((acc, m) => acc + Number(m.amount), 0);

    const withdraws = session.movements
      .filter((m) => m.type === 'WITHDRAW')
      .reduce((acc, m) => acc + Number(m.amount), 0);

    // Opcional: Calcular systemBalance e difference para log ou retorno, mas não salvar se não houver campo no banco.
    // const systemBalance = initial + salesTotal + supplies - withdraws;

    // 3. Atualiza a sessão para fechada
    return this.prisma.cashSession.update({
      where: { id: dto.sessionId },
      data: {
        closedAt: new Date(),
        closingAmount: dto.finalBalance,
        status: 'CLOSED',
      },
    });
  }

  async getActiveSession(userId: string) {
    // Busca uma sessão aberta onde este usuário é o operador OU apenas do caixa
    // Aqui assumimos que um usuário só pode ter uma sessão aberta por vez (regra comum)
    return this.prisma.cashSession.findFirst({
      where: {
        closedAt: null,
      },
      include: {
        cashRegister: true,
        movements: true,
      },
    });
  }
}
