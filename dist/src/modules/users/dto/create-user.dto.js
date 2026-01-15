"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
    email: zod_1.z.email('Email inválido, por favor insira um email válido'),
    password: zod_1.z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    role: zod_1.z.enum(enums_1.UserRole).default(enums_1.UserRole.CASHIER),
});
//# sourceMappingURL=create-user.dto.js.map