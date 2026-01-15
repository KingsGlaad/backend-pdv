"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProductDto = exports.BaseProductSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.BaseProductSchema = zod_1.z.object({
    code: zod_1.z.string().min(1, 'O código do produto é obrigatório'),
    name: zod_1.z.string().min(1, 'O nome do produto é obrigatório'),
    price: zod_1.z.number().min(0, 'O preço não pode ser negativo'),
    imageUrl: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
class BaseProductDto extends (0, nestjs_zod_1.createZodDto)(exports.BaseProductSchema) {
}
exports.BaseProductDto = BaseProductDto;
//# sourceMappingURL=product.dto.js.map