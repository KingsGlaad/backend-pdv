"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterController = void 0;
const common_1 = require("@nestjs/common");
const printer_service_1 = require("./printer.service");
const printer_config_dto_1 = require("./dto/printer-config.dto");
let PrinterController = class PrinterController {
    printerService;
    constructor(printerService) {
        this.printerService = printerService;
    }
    async print(data) {
        await this.printerService.printRequest('network', data.ip);
        return { message: 'Comando enviado ao emulador' };
    }
    async getAvailablePrinters() {
        return this.printerService.getAvailablePrinters();
    }
    async getPrinterConfigs() {
        return await this.printerService.getPrinterConfigs();
    }
    async getPrinterConfig(terminalId) {
        return this.printerService.getPrinterConfig(terminalId);
    }
    async savePrinterConfig(dto) {
        return this.printerService.savePrinterConfig(dto);
    }
    async testPrinter(dto) {
        return this.printerService.testPrinter(dto);
    }
    async reprintSale(id, body) {
        return this.printerService.printSaleById(id, body.terminalId);
    }
};
exports.PrinterController = PrinterController;
__decorate([
    (0, common_1.Post)('print'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "print", null);
__decorate([
    (0, common_1.Get)('available'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "getAvailablePrinters", null);
__decorate([
    (0, common_1.Get)('configs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "getPrinterConfigs", null);
__decorate([
    (0, common_1.Get)('config/:terminalId'),
    __param(0, (0, common_1.Param)('terminalId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "getPrinterConfig", null);
__decorate([
    (0, common_1.Post)('config'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [printer_config_dto_1.PrinterConfigDto]),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "savePrinterConfig", null);
__decorate([
    (0, common_1.Post)('test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [printer_config_dto_1.PrinterConfigDto]),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "testPrinter", null);
__decorate([
    (0, common_1.Post)('reprint/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PrinterController.prototype, "reprintSale", null);
exports.PrinterController = PrinterController = __decorate([
    (0, common_1.Controller)('printer'),
    __metadata("design:paramtypes", [printer_service_1.PrinterService])
], PrinterController);
//# sourceMappingURL=printer.controller.js.map