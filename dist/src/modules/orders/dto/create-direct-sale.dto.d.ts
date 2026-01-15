import { z } from 'zod';
export declare const CreateDirectSaleSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
    payments: z.ZodArray<z.ZodObject<{
        method: z.ZodString;
        amount: z.ZodNumber;
        reference: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    discount: z.ZodOptional<z.ZodNumber>;
    commandNumber: z.ZodOptional<z.ZodNumber>;
    terminalId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateDirectSaleDto = z.infer<typeof CreateDirectSaleSchema>;
