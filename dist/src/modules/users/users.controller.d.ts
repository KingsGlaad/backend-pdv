import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    create(body: unknown): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").UserRole;
    }>;
    findAll(page?: number, limit?: number, search?: string): Promise<{
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
    update(id: string, body: unknown): Promise<{
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
