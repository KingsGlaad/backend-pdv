"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderSchema = void 0;
const zod_1 = require("zod");
exports.CreateOrderSchema = zod_1.z.object({
    table: zod_1.z.string().optional(),
    number: zod_1.z.number().int().positive().optional(),
});
//# sourceMappingURL=create-order.dto.js.map