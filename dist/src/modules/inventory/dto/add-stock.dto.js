"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStockSchema = void 0;
const zod_1 = require("zod");
exports.AddStockSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'O nome do item é obrigatório'),
    unit: zod_1.z.string().min(1, 'A unidade do item é obrigatória'),
    quantity: zod_1.z.number().min(1, 'A quantidade deve ser no mínimo 1'),
    price: zod_1.z.number().min(0, 'O preço não pode ser negativo').optional(),
});
//# sourceMappingURL=add-stock.dto.js.map