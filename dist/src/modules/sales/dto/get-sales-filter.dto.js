"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSalesFilterDto = exports.getSalesFilterDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = __importDefault(require("zod"));
exports.getSalesFilterDto = zod_1.default.object({
    page: zod_1.default.number().min(1).default(1),
    limit: zod_1.default.number().min(1).default(10),
    search: zod_1.default.string().optional(),
    startDate: zod_1.default.string().optional(),
    endDate: zod_1.default.string().optional(),
    userId: zod_1.default.string().optional(),
});
class GetSalesFilterDto extends (0, nestjs_zod_1.createZodDto)(exports.getSalesFilterDto) {
}
exports.GetSalesFilterDto = GetSalesFilterDto;
//# sourceMappingURL=get-sales-filter.dto.js.map