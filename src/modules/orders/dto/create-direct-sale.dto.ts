import { z } from 'zod';

export const CreateDirectSaleSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().positive(),
    }),
  ),
  payments: z.array(
    z.object({
      method: z.string(),
      amount: z.number().positive(),
      reference: z.string().optional(),
    }),
  ),
  discount: z.number().min(0).optional(),
  commandNumber: z.number().int().positive().optional(),
});

export type CreateDirectSaleDto = z.infer<typeof CreateDirectSaleSchema>;
