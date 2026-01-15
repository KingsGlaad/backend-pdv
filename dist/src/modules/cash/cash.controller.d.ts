import { CashSessionService } from './cash-session.service';
import { CashMovementService } from './cash-movement.service';
import { CashDrawerService } from './cash-drawer.service';
import { OpenSessionDto } from './dto/open-session.dto';
import { CloseSessionDto } from './dto/close-session.dto';
import { CreateMovementDto } from './dto/create-movement.dto';
export declare class CashController {
    private readonly sessionService;
    private readonly movementService;
    private readonly drawerService;
    constructor(sessionService: CashSessionService, movementService: CashMovementService, drawerService: CashDrawerService);
    getRegisters(): Promise<{
        id: string;
        name: string;
        isOpen: boolean;
        currentSessionId: string | null;
        currentOperatorId: string | null;
        currentOperatorName: string | null;
        openedAt: Date;
    }[]>;
    getStatus(req: any): Promise<{
        isOpen: boolean;
        session: ({
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
        }) | null;
    }>;
    openSession(req: any, dto: OpenSessionDto): Promise<{
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
    closeSession(req: any, dto: CloseSessionDto): Promise<{
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
    createMovement(req: any, dto: CreateMovementDto): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        reason: string | null;
        sessionId: string;
        type: import("../../generated/prisma/enums").CashMovementType;
    }>;
    getFlow(req: any): Promise<({
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
        type: import("../../generated/prisma/enums").CashMovementType;
    })[]>;
}
