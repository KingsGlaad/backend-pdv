import { z } from 'zod';
export declare const CreateProductSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const CreateProductDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>> & {
    io: "input";
};
export declare class CreateProductDto extends CreateProductDto_base {
}
export {};
