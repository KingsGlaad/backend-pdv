import { z } from 'zod';
export declare const AddItemSchema: z.ZodObject<{
    productId: z.ZodString;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export type AddItemDto = z.infer<typeof AddItemSchema>;
