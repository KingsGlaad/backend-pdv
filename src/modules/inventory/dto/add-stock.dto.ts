import { z } from 'zod';

export const AddStockSchema = z.object({
  name: z.string().min(1, 'O nome do item é obrigatório'),
  unit: z.string().min(1, 'A unidade do item é obrigatória'),
  quantity: z.number().min(1, 'A quantidade deve ser no mínimo 1'),
  price: z.number().min(0, 'O preço não pode ser negativo').optional(),
});

export type AddStockDto = z.infer<typeof AddStockSchema>;
