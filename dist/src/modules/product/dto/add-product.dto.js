"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = exports.CreateProductSchema = void 0;
const zod_1 = require("zod");
const product_dto_1 = require("./product.dto");
const nestjs_zod_1 = require("nestjs-zod");
exports.CreateProductSchema = product_dto_1.BaseProductSchema.extend({
    code: zod_1.z.string().min(1, 'O código do produto é obrigatório'),
    name: zod_1.z.string().min(1, 'O nome do produto é obrigatório'),
    price: zod_1.z.number().min(0, 'O preço não pode ser negativo'),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
});
class CreateProductDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateProductSchema) {
}
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=add-product.dto.js.map