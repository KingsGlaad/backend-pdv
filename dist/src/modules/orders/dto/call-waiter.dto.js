"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallWaiterSchema = void 0;
const zod_1 = require("zod");
exports.CallWaiterSchema = zod_1.z.object({
    table: zod_1.z.string().min(1, 'Mesa é obrigatória'),
});
//# sourceMappingURL=call-waiter.dto.js.map