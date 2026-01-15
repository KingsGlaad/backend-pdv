import { z } from 'zod';
export declare const CreateOrderSchema: z.ZodObject<{
    table: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type CreateOrderDto = z.infer<typeof CreateOrderSchema>;
