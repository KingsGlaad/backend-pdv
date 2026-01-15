import { PrismaService } from '../../prisma/prisma.service';
import { OpenSessionDto } from './dto/open-session.dto';
import { CloseSessionDto } from './dto/close-session.dto';
export declare class CashSessionService {
    private prisma;
    constructor(prisma: PrismaService);
    openSession(userId: string, dto: OpenSessionDto): Promise<{
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
    }>;
    closeSession(userId: string, dto: CloseSessionDto): Promise<{
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
    }>;
    getActiveSession(userId: string): Promise<({
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
    }) | null>;
}
