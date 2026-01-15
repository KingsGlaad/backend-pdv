"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = exports.UpdateProductSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const product_dto_1 = require("./product.dto");
exports.UpdateProductSchema = product_dto_1.BaseProductSchema.partial();
class UpdateProductDto extends (0, nestjs_zod_1.createZodDto)(exports.UpdateProductSchema) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map