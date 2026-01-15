"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterConfigDto = exports.printerConfigDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.printerConfigDto = zod_1.z.object({
    terminalId: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    printerName: zod_1.z.string().min(1, 'O nome do printer é obrigatório'),
    printerType: zod_1.z.string().min(1, 'O tipo do printer é obrigatório'),
    connection: zod_1.z.string().min(1, 'A conexão do printer é obrigatória'),
    width: zod_1.z.number().optional(),
    enabled: zod_1.z.boolean().optional(),
});
class PrinterConfigDto extends (0, nestjs_zod_1.createZodDto)(exports.printerConfigDto) {
}
exports.PrinterConfigDto = PrinterConfigDto;
//# sourceMappingURL=printer-config.dto.js.map