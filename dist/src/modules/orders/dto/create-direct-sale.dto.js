"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDirectSaleSchema = void 0;
const zod_1 = require("zod");
exports.CreateDirectSaleSchema = zod_1.z.object({
    items: zod_1.z.array(zod_1.z.object({
        productId: zod_1.z.string(),
        quantity: zod_1.z.number().positive(),
    })),
    payments: zod_1.z.array(zod_1.z.object({
        method: zod_1.z.string(),
        amount: zod_1.z.number().positive(),
        reference: zod_1.z.string().optional(),
    })),
    discount: zod_1.z.number().min(0).optional(),
    commandNumber: zod_1.z.number().int().positive().optional(),
    terminalId: zod_1.z.string().optional(),
});
//# sourceMappingURL=create-direct-sale.dto.js.map