import { ClientKafka } from '@nestjs/microservices';
import { PrismaService } from '../../prisma/prisma.service';
import { CloseOrderDto } from './dto/close-order.dto';
import { CreateDirectSaleDto } from './dto/create-direct-sale.dto';
import { PrinterService } from '../printer/printer.service';
import { EventsGateway } from '../events/events.gateway';
export declare class OrdersService {
    private prisma;
    private printerService;
    private eventsGateway;
    private client;
    constructor(prisma: PrismaService, printerService: PrinterService, eventsGateway: EventsGateway, client: ClientKafka);
    openOrder(userId: string, table?: string, number?: number): Promise<{
        number: number;
        id: string;
        createdAt: Date;
        table: string | null;
        status: import("src/generated/prisma/client").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    }>;
    findOpenOrders(): Promise<({
        items: ({
            product: {
                id: string;
                name: string;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                category: string | null;
                code: string;
                description: string | null;
                imageUrl: string | null;
            };
        } & {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            saleId: string | null;
            orderId: string | null;
            productId: string;
            quantity: number;
        })[];
        openedBy: {
            id: string;
            name: string;
        };
    } & {
        number: number;
        id: string;
        createdAt: Date;
        table: string | null;
        status: import("src/generated/prisma/client").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    })[]>;
    findOne(id: string): Promise<({
        items: ({
            product: {
                id: string;
                name: string;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                category: string | null;
                code: string;
                description: string | null;
                imageUrl: string | null;
            };
        } & {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            saleId: string | null;
            orderId: string | null;
            productId: string;
            quantity: number;
        })[];
    } & {
        number: number;
        id: string;
        createdAt: Date;
        table: string | null;
        status: import("src/generated/prisma/client").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    }) | null>;
    createDirectSale(userId: string, dto: CreateDirectSaleDto): Promise<{
        saleId: string;
        total: number;
        finalAmount: number;
        totalPaid: number;
        change: number;
    }>;
    addItem(orderId: string, quantity: number, productId: string): Promise<{
        id: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        saleId: string | null;
        orderId: string | null;
        productId: string;
        quantity: number;
    }>;
    removeItem(orderId: string, itemId: string, reason: string): Promise<({
        items: ({
            product: {
                id: string;
                name: string;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                category: string | null;
                code: string;
                description: string | null;
                imageUrl: string | null;
            };
        } & {
            id: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            saleId: string | null;
            orderId: string | null;
            productId: string;
            quantity: number;
        })[];
    } & {
        number: number;
        id: string;
        createdAt: Date;
        table: string | null;
        status: import("src/generated/prisma/client").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    }) | null>;
    closeOrder(orderId: string, dto: CloseOrderDto): Promise<{
        saleId: string;
        total: number;
        finalAmount: number;
        totalPaid: number;
        change: number;
    }>;
    private handlePrinting;
    callWaiter(table: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
