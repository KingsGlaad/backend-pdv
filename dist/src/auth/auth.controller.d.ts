import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    signIn(dto: SignInDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            role: import("../generated/prisma/enums").UserRole;
        };
    }>;
    signOut(): {
        message: string;
    };
    me(req: any): Promise<any>;
}
