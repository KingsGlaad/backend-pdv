import { z } from 'zod';

export const RemoveItemSchema = z.object({
  reason: z.string().min(1, 'Motivo é obrigatório'),
});

export type RemoveItemDto = z.infer<typeof RemoveItemSchema>;
