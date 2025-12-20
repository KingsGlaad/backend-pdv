import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CloseOrderDto } from './dto/close-order.dto';
import { PaymentMethod } from '../../generated/prisma/enums';
import { CashMovement } from 'src/generated/prisma/client';
import { CreateDirectSaleDto } from './dto/create-direct-sale.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async openOrder(userId: string, table?: string, number?: number) {
    let nextNumber = number;

    if (!nextNumber) {
      const lastOrder = await this.prisma.order.findFirst({
        orderBy: { number: 'desc' },
      });
      nextNumber = lastOrder ? lastOrder.number + 1 : 1;
    } else {
      // Check if order with this number exists and is OPEN
      const existingOrder = await this.prisma.order.findFirst({
        where: { number: nextNumber, status: 'OPEN' },
      });

      if (existingOrder) {
        return existingOrder;
      }
      const existingOpen = await this.prisma.order.findFirst({
        where: { number: nextNumber, status: 'OPEN' },
      });
      if (existingOpen) return existingOpen;
    }

    return this.prisma.order.create({
      data: {
        number: nextNumber,
        table,
        openedById: userId,
      },
    });
  }

  async findOpenOrders() {
    return this.prisma.order.findMany({
      where: { status: 'OPEN' },
      orderBy: { number: 'asc' },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async createDirectSale(userId: string, dto: CreateDirectSaleDto) {
    return this.prisma.$transaction(async (tx) => {
      const activeSession = await tx.cashSession.findFirst({
        where: {
          status: 'OPEN',
          cashRegister: { isActive: true },
        },
      });

      if (!activeSession) {
        throw new BadRequestException('Nenhum caixa/sessão aberto');
      }

      let total = 0;
      const saleItemsData: any[] = [];

      for (const item of dto.items) {
        const product = await tx.product.findUnique({
          where: { id: item.productId },
        });

        if (!product) {
          throw new BadRequestException(`Produto ${item.productId} não encontrado`);
        }

        const itemTotal = Number(product.price) * item.quantity;
        total += itemTotal;
        saleItemsData.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
        });
      }

      const discount = dto.discount ?? 0;
      const finalAmount = total - discount;

      if (finalAmount < 0) {
        throw new BadRequestException('Valor final inválido');
      }

      // 3. Create Sale
      // Logic for Command Linking
      let orderId: string | null = null;
      if (dto.commandNumber) {
        // Create or Find Order to link
        // Since "Direct Sale" implies atomic, valid strategy is:
        // Try to create a new Order with this number.
        // If one exists (OPEN), we might want to close it or reuse it?
        // "Treat everything as Direct Sale" -> simplifies to: Just create a record in Order table
        // so we know this sale refers to Command X.

        // Let's first check if there is an OPEN order with this number
        const openOrder = await tx.order.findFirst({
          where: { number: dto.commandNumber, status: 'OPEN' },
        });

        if (openOrder) {
          orderId = openOrder.id;
          // Close it
          await tx.order.update({
            where: { id: orderId },
            data: { status: 'CLOSED', closedAt: new Date() },
          });
        } else {
          // Create a new CLOSED order for record
          const newOrder = await tx.order.create({
            data: {
              number: dto.commandNumber,
              status: 'CLOSED',
              closedAt: new Date(),
              openedById: userId,
            },
          });
          orderId = newOrder.id;
        }
      }

      const sale = await tx.sale.create({
        data: {
          total,
          discount,
          finalAmount,
          paymentMethod: 'MIXED',
          status: 'COMPLETED',
          userId: userId,
          cashSessionId: activeSession.id,
          // Link to Order if commandNumber is present
          orders: orderId ? { connect: { id: orderId } } : undefined,
          items: {
            create: saleItemsData,
          },
        },
      });

      // 4. Process Payments
      const payments: any[] = [];
      let totalPaid = 0;

      for (const p of dto.payments) {
        totalPaid += Number(p.amount);

        let methodEnum: PaymentMethod = PaymentMethod.OTHER;
        switch (p.method.toLowerCase()) {
          case 'money':
            methodEnum = PaymentMethod.CASH;
            break;
          case 'pix':
            methodEnum = PaymentMethod.PIX;
            break;
          case 'credit':
            methodEnum = PaymentMethod.CARD;
            break;
          case 'debit':
            methodEnum = PaymentMethod.CARD;
            break;
          default:
            methodEnum = PaymentMethod.OTHER;
        }

        let movement: CashMovement | null = null;

        movement = await tx.cashMovement.create({
          data: {
            sessionId: activeSession.id,
            type: 'SALE',
            amount: p.amount,
            reason: `Venda Direta #${sale.code || sale.id}`,
          },
        });

        const payment = await tx.payment.create({
          data: {
            saleId: sale.id,
            method: methodEnum,
            amount: p.amount,
            status: 'CONFIRMED',
            reference: p.reference,
            cashMovementId: movement ? movement.id : undefined,
          },
        });
        payments.push(payment);
      }

      if (totalPaid < finalAmount) {
        throw new BadRequestException('Pagamentos insuficientes');
      }

      return {
        saleId: sale.id,
        total,
        finalAmount,
        totalPaid,
        change: totalPaid - finalAmount,
      };
    });
  }

  async addItem(orderId: string, quantity: number, productId: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new BadRequestException('Produto não encontrado');
    }

    // Check if order exists and is OPEN
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order || order.status !== 'OPEN') {
      throw new BadRequestException('Comanda não encontrada ou fechada');
    }

    return this.prisma.orderItem.create({
      data: {
        orderId,
        productId,
        quantity,
        price: product.price,
      },
    });
  }

  async closeOrder(orderId: string, dto: CloseOrderDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Busca comanda
      const order = await tx.order.findUnique({
        where: { id: orderId },
        include: {
          items: true,
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
      const total = order.items.reduce((sum, item) => {
        return sum + Number(item.price) * item.quantity;
      }, 0);

      const discount = dto.discount ?? 0;
      const finalAmount = total - discount;

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
          orders: { connect: { id: orderId } },
          total: total,
          discount,
          finalAmount,
          paymentMethod: 'MIXED',
          status: 'COMPLETED',
        },
      });

      const activeSession = await tx.cashSession.findFirst({
        where: {
          status: 'OPEN',
          cashRegister: { isActive: true },
        },
      });

      if (!activeSession) {
        throw new BadRequestException('Nenhum caixa/sessão aberto');
      }

      const payments: any[] = [];
      let totalPaid = 0;

      for (const p of dto.payments) {
        totalPaid += Number(p.amount);

        let methodEnum: PaymentMethod = PaymentMethod.OTHER;
        switch (p.method.toLowerCase()) {
          case 'money':
            methodEnum = PaymentMethod.CASH;
            break;
          case 'pix':
            methodEnum = PaymentMethod.PIX;
            break;
          case 'credit':
            methodEnum = PaymentMethod.CARD;
            break;
          case 'debit':
            methodEnum = PaymentMethod.CARD;
            break;
          default:
            methodEnum = PaymentMethod.OTHER;
        }
        let movement: CashMovement | null = null;

        if (activeSession) {
          movement = await tx.cashMovement.create({
            data: {
              sessionId: activeSession.id,
              type: 'SALE',
              amount: p.amount,
              reason: `Venda #${sale.code || sale.id} (${methodEnum})`,
            },
          });
        }

        const payment = await tx.payment.create({
          data: {
            saleId: sale.id,
            method: methodEnum,
            amount: p.amount,
            status: 'CONFIRMED',
            reference: p.reference,
            cashMovementId: movement ? movement.id : undefined,
          },
        });
        payments.push(payment);
      }

      if (totalPaid < finalAmount) {
        throw new BadRequestException('Pagamentos insuficientes');
      }

      return {
        saleId: sale.id,
        total,
        finalAmount,
        totalPaid,
        change: totalPaid - finalAmount,
      };
    });
  }
}
