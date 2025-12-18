// src/modules/users/dto/create-user.dto.ts
import { UserRole } from 'src/generated/prisma/enums';
import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.email('Email inválido, por favor insira um email válido'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
  role: z.enum(UserRole).default(UserRole.CASHIER),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
