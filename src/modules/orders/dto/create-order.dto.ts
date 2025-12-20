import { z } from 'zod';

export const CreateOrderSchema = z.object({
  table: z.string().optional(),
  number: z.number().int().positive().optional(),
});

export type CreateOrderDto = z.infer<typeof CreateOrderSchema>;
