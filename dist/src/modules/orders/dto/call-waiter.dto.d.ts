import { z } from 'zod';
export declare const CallWaiterSchema: z.ZodObject<{
    table: z.ZodString;
}, z.core.$strip>;
export type CallWaiterDto = z.infer<typeof CallWaiterSchema>;
