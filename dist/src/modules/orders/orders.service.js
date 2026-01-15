"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const prisma_service_1 = require("../../prisma/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
const printer_service_1 = require("../printer/printer.service");
const events_gateway_1 = require("../events/events.gateway");
let OrdersService = class OrdersService {
    prisma;
    printerService;
    eventsGateway;
    client;
    constructor(prisma, printerService, eventsGateway, client) {
        this.prisma = prisma;
        this.printerService = printerService;
        this.eventsGateway = eventsGateway;
        this.client = client;
    }
    async openOrder(userId, table, number) {
        let nextNumber = number;
        if (!nextNumber) {
            const lastOrder = await this.prisma.order.findFirst({
                orderBy: { number: 'desc' },
            });
            nextNumber = lastOrder ? lastOrder.number + 1 : 1;
        }
        else {
            const existingOrder = await this.prisma.order.findFirst({
                where: { number: nextNumber, status: 'OPEN' },
            });
            if (existingOrder) {
                return existingOrder;
            }
            const existingOpen = await this.prisma.order.findFirst({
                where: { number: nextNumber, status: 'OPEN' },
            });
            if (existingOpen)
                return existingOpen;
        }
        const newOrder = await this.prisma.order.create({
            data: {
                number: nextNumber,
                table,
                openedById: userId,
            },
        });
        this.client.emit('orders.created', newOrder);
        return newOrder;
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
                openedBy: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.order.findUnique({
            where: { id },
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
    async createDirectSale(userId, dto) {
        const result = await this.prisma.$transaction(async (tx) => {
            const activeSession = await tx.cashSession.findFirst({
                where: {
                    status: 'OPEN',
                    cashRegister: { isActive: true },
                },
            });
            if (!activeSession) {
                throw new common_1.BadRequestException('Nenhum caixa/sessão aberto');
            }
            let total = 0;
            const saleItemsData = [];
            const printItems = [];
            for (const item of dto.items) {
                const product = await tx.product.findUnique({
                    where: { id: item.productId },
                });
                if (!product) {
                    throw new common_1.BadRequestException(`Produto ${item.productId} não encontrado`);
                }
                const itemTotal = Number(product.price) * item.quantity;
                total += itemTotal;
                saleItemsData.push({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: product.price,
                });
                printItems.push({
                    product: { code: product.code, name: product.name },
                    quantity: item.quantity,
                    price: product.price,
                });
            }
            const discount = dto.discount ?? 0;
            const finalAmount = total - discount;
            if (finalAmount < 0) {
                throw new common_1.BadRequestException('Valor final inválido');
            }
            let orderId = null;
            if (dto.commandNumber) {
                const openOrder = await tx.order.findFirst({
                    where: { number: dto.commandNumber, status: 'OPEN' },
                });
                if (openOrder) {
                    orderId = openOrder.id;
                    await tx.order.update({
                        where: { id: orderId },
                        data: { status: 'CLOSED', closedAt: new Date() },
                    });
                }
                else {
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
            const itemsToCreate = saleItemsData.map((item) => ({
                ...item,
                orderId: orderId ?? undefined,
            }));
            const sale = await tx.sale.create({
                data: {
                    total,
                    discount,
                    finalAmount,
                    paymentMethod: 'MIXED',
                    status: 'COMPLETED',
                    userId: userId,
                    cashSessionId: activeSession.id,
                    orders: orderId ? { connect: { id: orderId } } : undefined,
                    items: {
                        create: itemsToCreate,
                    },
                },
                include: {
                    user: true,
                },
            });
            const payments = [];
            let totalPaid = 0;
            for (const p of dto.payments) {
                totalPaid += Number(p.amount);
                let methodEnum = enums_1.PaymentMethod.OTHER;
                switch (p.method.toLowerCase()) {
                    case 'money':
                        methodEnum = enums_1.PaymentMethod.CASH;
                        break;
                    case 'pix':
                        methodEnum = enums_1.PaymentMethod.PIX;
                        break;
                    case 'credit':
                        methodEnum = enums_1.PaymentMethod.CARD;
                        break;
                    case 'debit':
                        methodEnum = enums_1.PaymentMethod.CARD;
                        break;
                    default:
                        methodEnum = enums_1.PaymentMethod.OTHER;
                }
                let movement = null;
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
                throw new common_1.BadRequestException('Pagamentos insuficientes');
            }
            return {
                result: {
                    saleId: sale.id,
                    total,
                    finalAmount,
                    totalPaid,
                    change: totalPaid - finalAmount,
                },
                saleObj: sale,
                items: printItems,
                payments: payments,
            };
        });
        if (dto.terminalId) {
            this.handlePrinting(dto.terminalId, result.saleObj, result.items, result.payments);
        }
        this.eventsGateway.sendToAll('sale.created', result.result);
        return result.result;
    }
    async addItem(orderId, quantity, productId) {
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.BadRequestException('Produto não encontrado');
        }
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
        });
        if (!order || order.status !== 'OPEN') {
            throw new common_1.BadRequestException('Comanda não encontrada ou fechada');
        }
        const item = await this.prisma.orderItem.create({
            data: {
                orderId,
                productId,
                quantity,
                price: product.price,
            },
        });
        const updatedOrder = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: { items: { include: { product: true } } },
        });
        this.client.emit('orders.updated', updatedOrder);
        return item;
    }
    async removeItem(orderId, itemId, reason) {
        const order = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: { items: true },
        });
        if (!order || order.status !== 'OPEN') {
            throw new common_1.BadRequestException('Comanda não encontrada ou fechada/cancelada');
        }
        const itemIndex = order.items.findIndex((i) => i.id === itemId);
        if (itemIndex === -1) {
            throw new common_1.BadRequestException('Item não pertence a esta comanda');
        }
        await this.prisma.orderItem.delete({
            where: { id: itemId },
        });
        const updatedOrder = await this.prisma.order.findUnique({
            where: { id: orderId },
            include: { items: { include: { product: true } } },
        });
        this.client.emit('orders.updated', updatedOrder);
        return updatedOrder;
    }
    async closeOrder(orderId, dto) {
        const result = await this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findUnique({
                where: { id: orderId },
                include: {
                    items: { include: { product: true } },
                },
            });
            if (!order) {
                throw new common_1.BadRequestException('Comanda não encontrada');
            }
            if (order.status !== 'OPEN') {
                throw new common_1.BadRequestException('Comanda não está aberta');
            }
            if (order.items.length === 0) {
                throw new common_1.BadRequestException('Comanda sem itens');
            }
            const total = order.items.reduce((sum, item) => {
                return sum + Number(item.price) * item.quantity;
            }, 0);
            const discount = dto.discount ?? 0;
            const finalAmount = total - discount;
            if (finalAmount < 0) {
                throw new common_1.BadRequestException('Valor final inválido');
            }
            await tx.order.update({
                where: { id: orderId },
                data: {
                    status: 'CLOSED',
                    closedAt: new Date(),
                },
            });
            const sale = await tx.sale.create({
                data: {
                    orders: { connect: { id: orderId } },
                    total: total,
                    discount,
                    finalAmount,
                    paymentMethod: 'MIXED',
                    status: 'COMPLETED',
                },
                include: { user: true },
            });
            const activeSession = await tx.cashSession.findFirst({
                where: {
                    status: 'OPEN',
                    cashRegister: { isActive: true },
                },
            });
            if (!activeSession) {
                throw new common_1.BadRequestException('Nenhum caixa/sessão aberto');
            }
            const payments = [];
            let totalPaid = 0;
            for (const p of dto.payments) {
                totalPaid += Number(p.amount);
                let methodEnum = enums_1.PaymentMethod.OTHER;
                switch (p.method.toLowerCase()) {
                    case 'money':
                        methodEnum = enums_1.PaymentMethod.CASH;
                        break;
                    case 'pix':
                        methodEnum = enums_1.PaymentMethod.PIX;
                        break;
                    case 'credit':
                        methodEnum = enums_1.PaymentMethod.CARD;
                        break;
                    case 'debit':
                        methodEnum = enums_1.PaymentMethod.CARD;
                        break;
                    default:
                        methodEnum = enums_1.PaymentMethod.OTHER;
                }
                let movement = null;
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
                throw new common_1.BadRequestException('Pagamentos insuficientes');
            }
            return {
                result: {
                    saleId: sale.id,
                    total,
                    finalAmount,
                    totalPaid,
                    change: totalPaid - finalAmount,
                },
                saleObj: sale,
                items: order.items,
                payments: payments,
            };
        });
        if (dto.terminalId) {
            void this.handlePrinting(dto.terminalId, result.saleObj, result.items, result.payments);
        }
        this.eventsGateway.sendToAll('sale.created', result.result);
        return result.result;
    }
    async handlePrinting(terminalId, sale, items, payments) {
        try {
            const config = await this.printerService.getPrinterConfig(terminalId);
            if (config && config.enabled && config.printerName) {
                const width = config.width === 58 ? 32 : config.width === 80 ? 48 : 40;
                await this.printerService.printReceipt(config.printerName, width, sale, items, payments);
            }
        }
        catch (e) {
            console.error('Failed to process printing', e);
        }
    }
    async callWaiter(table) {
        this.eventsGateway.sendToAll('call_waiter', { table, timestamp: new Date() });
        return { success: true, message: `Chamado garçom para mesa ${table}` };
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)('KAFKA_SERVICE')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        printer_service_1.PrinterService,
        events_gateway_1.EventsGateway,
        microservices_1.ClientKafka])
], OrdersService);
//# sourceMappingURL=orders.service.js.map