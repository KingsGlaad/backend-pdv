import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const BaseSettingsSchema = z.object({
  appName: z.string().min(1, 'O nome do aplicativo é obrigatório'),
  currency: z.string().min(1, 'A moeda é obrigatória'),
  logoUrl: z.string().optional(),
  theme: z.string().optional(),
});

export class BaseSettingsDto extends createZodDto(BaseSettingsSchema) {}
