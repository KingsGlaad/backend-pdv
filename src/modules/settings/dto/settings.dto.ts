import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const BaseSettingsSchema = z.object({
  appName: z.string().min(1, 'O nome do aplicativo é obrigatório'),
  currency: z.string().min(1, 'A moeda é obrigatória'),
  logoUrl: z.string().optional().nullable(),
  theme: z.string().optional(),
  companyName: z.string().optional(),
  tradingName: z.string().optional(),
  cnpj: z.string().optional(),
  stateRegistration: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
  address: z.string().optional(),
});

export class BaseSettingsDto extends createZodDto(BaseSettingsSchema) {}
