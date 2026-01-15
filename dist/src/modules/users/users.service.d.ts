import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").UserRole;
    }>;
    findAll(params: {
        page: number;
        limit: number;
        search?: string;
    }): Promise<{
        data: {
            id: string;
            name: string;
            email: string;
            role: import("../../generated/prisma/enums").UserRole;
            active: boolean;
        }[];
        meta: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").UserRole;
        active: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        role: import("../../generated/prisma/enums").UserRole;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
}
