import { z } from 'zod';
export declare const RemoveItemSchema: z.ZodObject<{
    reason: z.ZodString;
}, z.core.$strip>;
export type RemoveItemDto = z.infer<typeof RemoveItemSchema>;
