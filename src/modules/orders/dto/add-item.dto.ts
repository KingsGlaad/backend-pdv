import { z } from 'zod';

export const AddItemSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
});

export type AddItemDto = z.infer<typeof AddItemSchema>;
