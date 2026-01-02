import { createZodDto } from 'nestjs-zod';
import { BaseSettingsSchema } from './settings.dto';
import { z } from 'zod';

export const CreateSettingsSchema = BaseSettingsSchema.extend({
  id: z.string().optional(),
});

export class CreateSettingsDto extends createZodDto(CreateSettingsSchema) {}
