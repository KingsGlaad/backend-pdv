import { z } from 'zod';
export declare const CreateSettingsSchema: z.ZodObject<{
    appName: z.ZodString;
    currency: z.ZodString;
    logoUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    theme: z.ZodOptional<z.ZodString>;
    companyName: z.ZodOptional<z.ZodString>;
    tradingName: z.ZodOptional<z.ZodString>;
    cnpj: z.ZodOptional<z.ZodString>;
    stateRegistration: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    address: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const CreateSettingsDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    appName: z.ZodString;
    currency: z.ZodString;
    logoUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    theme: z.ZodOptional<z.ZodString>;
    companyName: z.ZodOptional<z.ZodString>;
    tradingName: z.ZodOptional<z.ZodString>;
    cnpj: z.ZodOptional<z.ZodString>;
    stateRegistration: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    address: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>> & {
    io: "input";
};
export declare class CreateSettingsDto extends CreateSettingsDto_base {
}
export {};
