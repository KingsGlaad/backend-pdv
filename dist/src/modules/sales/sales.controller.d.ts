import { SalesService } from './sales.service';
import { GetSalesFilterDto } from './dto/get-sales-filter.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    findAll(filters: GetSalesFilterDto): Promise<{
        data: ({
            user: {
                name: string;
            } | null;
            payments: {
                id: string;
                createdAt: Date;
                status: import("../../generated/prisma/enums").PaymentStatus;
                saleId: string;
                method: import("../../generated/prisma/enums").PaymentMethod;
                amount: import("@prisma/client-runtime-utils").Decimal;
                reference: string | null;
                cashMovementId: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            code: string;
            status: import("../../generated/prisma/enums").SaleStatus;
            discount: import("@prisma/client-runtime-utils").Decimal | null;
            cashSessionId: string | null;
            customerCpf: string | null;
            paymentMethod: string;
            total: import("@prisma/client-runtime-utils").Decimal;
            userId: string | null;
            finalAmount: import("@prisma/client-runtime-utils").Decimal;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getStats(startDate?: string, endDate?: string): Promise<{
        totalAmount: number | import("@prisma/client-runtime-utils").Decimal;
        count: number;
        averageTicket: number;
    }>;
    getChart(startDate?: string, endDate?: string): Promise<{
        date: string;
        total: number;
    }[]>;
}
