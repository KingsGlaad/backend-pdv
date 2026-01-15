"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSettingsDto = exports.BaseSettingsSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.BaseSettingsSchema = zod_1.z.object({
    appName: zod_1.z.string().min(1, 'O nome do aplicativo é obrigatório'),
    currency: zod_1.z.string().min(1, 'A moeda é obrigatória'),
    logoUrl: zod_1.z.string().optional().nullable(),
    theme: zod_1.z.string().optional(),
    companyName: zod_1.z.string().optional(),
    tradingName: zod_1.z.string().optional(),
    cnpj: zod_1.z.string().optional(),
    stateRegistration: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string().email('E-mail inválido').optional().or(zod_1.z.literal('')),
    address: zod_1.z.string().optional(),
});
class BaseSettingsDto extends (0, nestjs_zod_1.createZodDto)(exports.BaseSettingsSchema) {
}
exports.BaseSettingsDto = BaseSettingsDto;
//# sourceMappingURL=settings.dto.js.map