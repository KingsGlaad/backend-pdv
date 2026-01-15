import { z } from 'zod';
export declare const CloseOrderSchema: z.ZodObject<{
    payments: z.ZodArray<z.ZodObject<{
        method: z.ZodString;
        amount: z.ZodNumber;
        reference: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    discount: z.ZodOptional<z.ZodNumber>;
    terminalId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CloseOrderDto = z.infer<typeof CloseOrderSchema>;
