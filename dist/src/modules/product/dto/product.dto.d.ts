import { z } from 'zod';
export declare const BaseProductSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    price: z.ZodNumber;
    imageUrl: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const BaseProductDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    price: z.ZodNumber;
    imageUrl: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>> & {
    io: "input";
};
export declare class BaseProductDto extends BaseProductDto_base {
}
export {};
