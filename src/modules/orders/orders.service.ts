import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CloseOrderDto } from './dto/close-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async openOrder(userId: string, table?: string) {
    const lastOrder = await this.prisma.order.findFirst({
      orderBy: { number: 'desc' },
    });

    const nextNumber = lastOrder ? lastOrder.number + 1 : 1;

    return this.prisma.order.create({
      data: {
        number: nextNumber,
        table,
        openedById: userId,
      },
    });
  }

  async closeOrder(orderId: string, dto: CloseOrderDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Busca comanda
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: {
          items: {
            where: { status: { not: 'CANCELED' } },
          },
        },
      });
      if (!order) {
        throw new BadRequestException('Comanda não encontrada');
      }

      if (order.status !== 'OPEN') {
        throw new BadRequestException('Comanda não está aberta');
      }

      if (order.items.length === 0) {
        throw new BadRequestException('Comanda sem itens');
      }

      // 2. Calcula total
      const totalAmount = order.items.reduce((sum, item) => {
        return sum + Number(item.unitPrice) * item.quantity;
      }, 0);

      const discount = dto.discount ?? 0;
      const finalAmount = totalAmount - discount;

      if (finalAmount < 0) {
        throw new BadRequestException('Valor final inválido');
      }
      // 3. Fecha comanda
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: 'CLOSED',
          closedAt: new Date(),
        },
      });

      // 4. Cria venda
      const sale = await tx.sale.create({
        data: {
          orderId,
          totalAmount,
          discount,
          finalAmount,
        },
      });

      // 5. Cria pagamentos
      const payments = await Promise.all(
        dto.payments.map((p) =>
          tx.payment.create({
            data: {
              saleId: sale.id,
              method: p.method,
              amount: p.amount,
              status: 'CONFIRMED',
              reference: p.reference,
            },
          }),
        ),
      );

      const totalPaid = payments.reduce((sum, p) => sum + Number(p.amount), 0);

      if (totalPaid < finalAmount) {
        throw new BadRequestException('Pagamentos insuficientes para fechar a venda');
      }

      // 6. Busca caixa aberto
      const cashRegister = await tx.cashRegister.findFirst({
        where: { active: true },
      });

      if (!cashRegister) {
        throw new BadRequestException('Nenhum caixa aberto');
      }

      // 7. Gera movimentos de caixa
      for (const payment of payments) {
        await tx.cashMovement.create({
          data: {
            cashSessionId: cashRegister.id,
            type: 'SALE',
            method: payment.method,
            amount: payment.amount,
            referenceId: sale.id,
          },
        });
      }

      return {
        saleId: sale.id,
        totalAmount,
        finalAmount,
        totalPaid,
        change: totalPaid - finalAmount,
      };
    });
  }
}
