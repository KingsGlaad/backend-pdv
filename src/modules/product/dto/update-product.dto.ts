import { createZodDto } from 'nestjs-zod';
import { BaseProductSchema } from './product.dto';

export const UpdateProductSchema = BaseProductSchema.partial();

export class UpdateProductDto extends createZodDto(UpdateProductSchema) {}
