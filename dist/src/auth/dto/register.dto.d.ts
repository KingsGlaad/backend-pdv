import zod from 'zod';
export declare const RegisterDto: zod.ZodObject<{
    email: zod.ZodEmail;
    password: zod.ZodString;
    name: zod.ZodString;
    role: zod.ZodOptional<zod.ZodEnum<{
        readonly ADMIN: "ADMIN";
        readonly MANAGER: "MANAGER";
        readonly CASHIER: "CASHIER";
        readonly WAITER: "WAITER";
    }>>;
}, zod.core.$strip>;
export type RegisterDto = zod.infer<typeof RegisterDto>;
