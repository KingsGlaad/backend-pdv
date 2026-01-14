import { z } from 'zod';

export const CallWaiterSchema = z.object({
  table: z.string().min(1, 'Mesa é obrigatória'),
});

export type CallWaiterDto = z.infer<typeof CallWaiterSchema>;
