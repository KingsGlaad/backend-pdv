import { PrismaService } from 'src/prisma/prisma.service';
export declare class CashDrawerService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllWithStatus(): Promise<{
        id: string;
        name: string;
        isOpen: boolean;
        currentSessionId: string | null;
        currentOperatorId: string | null;
        currentOperatorName: string | null;
        openedAt: Date;
    }[]>;
}
