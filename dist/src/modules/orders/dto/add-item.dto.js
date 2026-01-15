"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemSchema = void 0;
const zod_1 = require("zod");
exports.AddItemSchema = zod_1.z.object({
    productId: zod_1.z.string().uuid(),
    quantity: zod_1.z.number().int().positive(),
});
//# sourceMappingURL=add-item.dto.js.map