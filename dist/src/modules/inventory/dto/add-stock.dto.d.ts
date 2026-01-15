import { z } from 'zod';
export declare const AddStockSchema: z.ZodObject<{
    name: z.ZodString;
    unit: z.ZodString;
    quantity: z.ZodNumber;
    price: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AddStockDto = z.infer<typeof AddStockSchema>;
