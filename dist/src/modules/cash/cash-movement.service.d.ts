import { PrismaService } from '../../prisma/prisma.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { CashMovementType } from '../../generated/prisma/enums';
export declare class CashMovementService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateMovementDto): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        reason: string | null;
        sessionId: string;
        type: CashMovementType;
    }>;
    findAll(filters: {
        startDate?: string;
        endDate?: string;
    }): Promise<({
        session: {
            user: {
                id: string;
                name: string;
                email: string;
                password: string;
                role: import("../../generated/prisma/enums").UserRole;
                active: boolean;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
            cashRegister: {
                id: string;
                name: string;
                createdAt: Date;
                isActive: boolean;
            };
        } & {
            id: string;
            status: string;
            openedAt: Date;
            closedAt: Date | null;
            userId: string;
            cashRegisterId: string;
            difference: import("@prisma/client-runtime-utils").Decimal | null;
            finalBalance: import("@prisma/client-runtime-utils").Decimal | null;
            initialBalance: import("@prisma/client-runtime-utils").Decimal;
            systemBalance: import("@prisma/client-runtime-utils").Decimal | null;
        };
    } & {
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        reason: string | null;
        sessionId: string;
        type: CashMovementType;
    })[]>;
}
