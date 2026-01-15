import { z } from 'zod';
export declare const CreateUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        readonly ADMIN: "ADMIN";
        readonly MANAGER: "MANAGER";
        readonly CASHIER: "CASHIER";
        readonly WAITER: "WAITER";
    }>>;
}, z.core.$strip>;
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
