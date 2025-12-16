import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const BaseProductSchema = z.object({
  code: z.string().min(1, 'O código do produto é obrigatório'),
  name: z.string().min(1, 'O nome do produto é obrigatório'),
  price: z.number().min(0, 'O preço não pode ser negativo'),
  category: z.string().optional(),
  description: z.string().optional(),
});

export class BaseProductDto extends createZodDto(BaseProductSchema) {}
