"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseOrderSchema = void 0;
const zod_1 = require("zod");
exports.CloseOrderSchema = zod_1.z.object({
    payments: zod_1.z.array(zod_1.z.object({
        method: zod_1.z.string(),
        amount: zod_1.z.number().positive(),
        reference: zod_1.z.string().optional(),
    })),
    discount: zod_1.z.number().min(0).optional(),
    terminalId: zod_1.z.string().optional(),
});
//# sourceMappingURL=close-order.dto.js.map