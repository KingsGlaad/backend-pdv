import { z } from 'zod';

export const CloseOrderSchema = z.object({
  payments: z.array(
    z.object({
      method: z.string(),
      amount: z.number().positive(),
      reference: z.string().optional(),
    }),
  ),
  discount: z.number().min(0).optional(),
});

export type CloseOrderDto = z.infer<typeof CloseOrderSchema>;
