"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemSchema = void 0;
const zod_1 = require("zod");
exports.RemoveItemSchema = zod_1.z.object({
    reason: zod_1.z.string().min(1, 'Motivo é obrigatório'),
});
//# sourceMappingURL=remove-item.dto.js.map