"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const enums_1 = require("../../generated/prisma/enums");
const zod_1 = __importDefault(require("zod"));
exports.RegisterDto = zod_1.default.object({
    email: zod_1.default.email('Email inválido, por favor insira um email válido.'),
    password: zod_1.default.string().min(8, 'A senha deve ter no mínimo 8 caracteres.'),
    name: zod_1.default.string(),
    role: zod_1.default.enum(enums_1.UserRole).optional(),
});
//# sourceMappingURL=register.dto.js.map