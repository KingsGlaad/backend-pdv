import { z } from 'zod';
import { BaseProductSchema } from './product.dto';
import { createZodDto } from 'nestjs-zod';

export const CreateProductSchema = BaseProductSchema.extend({
  code: z.string().min(1, 'O código do produto é obrigatório'),
  name: z.string().min(1, 'O nome do produto é obrigatório'),
  price: z.number().min(0, 'O preço não pode ser negativo'),
  category: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

export class CreateProductDto extends createZodDto(CreateProductSchema) {}
