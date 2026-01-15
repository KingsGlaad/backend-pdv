import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signIn(email: string, password: string): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            role: import("../generated/prisma/enums").UserRole;
        };
    }>;
}
