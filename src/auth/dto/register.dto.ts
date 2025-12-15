import { UserRole } from 'src/generated/prisma/enums';
import zod from 'zod';

export const RegisterDto = zod.object({
  email: zod.email('Email inválido, por favor insira um email válido.'),
  password: zod.string().min(8, 'A senha deve ter no mínimo 8 caracteres.'),
  name: zod.string(),
  role: zod.enum(UserRole).optional(),
});
export type RegisterDto = zod.infer<typeof RegisterDto>;
