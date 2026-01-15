import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: {
        sub: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../generated/prisma/enums").UserRole;
        active: boolean;
    }>;
}
export {};
