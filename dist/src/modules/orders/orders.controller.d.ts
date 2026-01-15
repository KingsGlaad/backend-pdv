import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly service;
    constructor(service: OrdersService);
    create(req: any, body: unknown): Promise<{
        number: number;
        id: string;
        createdAt: Date;
        table: string | null;
        status: import("../../generated/prisma/enums").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    }>;
    listOpen(): Promise<({
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
        status: import("../../generated/prisma/enums").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    })[]>;
    getOne(id: string): Promise<({
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
        status: import("../../generated/prisma/enums").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    }) | null>;
    createDirectSale(req: any, body: unknown): Promise<{
        saleId: string;
        total: number;
        finalAmount: number;
        totalPaid: number;
        change: number;
    }>;
    addItem(id: string, body: unknown): Promise<{
        id: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        saleId: string | null;
        orderId: string | null;
        productId: string;
        quantity: number;
    }>;
    removeItem(id: string, itemId: string, body: unknown): Promise<({
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
        status: import("../../generated/prisma/enums").OrderStatus;
        openedAt: Date;
        closedAt: Date | null;
        openedById: string;
        saleId: string | null;
    }) | null>;
    close(id: string, body: unknown): Promise<{
        saleId: string;
        total: number;
        finalAmount: number;
        totalPaid: number;
        change: number;
    }>;
    callWaiter(body: unknown): Promise<{
        success: boolean;
        message: string;
    }>;
}
