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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PrinterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterService = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const os_1 = require("os");
const util_1 = require("util");
const receipt_generator_1 = require("./receipt.generator");
const settings_service_1 = require("../settings/settings.service");
const escpos_1 = require("escpos");
const escpos_serialport_1 = __importDefault(require("escpos-serialport"));
const escpos_network_1 = __importDefault(require("escpos-network"));
const prisma_service_1 = require("../../prisma/prisma.service");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
class BufferAdapter {
    buffer = Buffer.alloc(0);
    open(callback) {
        if (callback)
            callback();
        return this;
    }
    close(callback, options) {
        if (callback)
            callback();
        return this;
    }
    write(data, callback) {
        this.buffer = Buffer.concat([this.buffer, data]);
        if (callback)
            callback();
        return this;
    }
    read(callback) {
        return this;
    }
}
let PrinterService = PrinterService_1 = class PrinterService {
    settingsService;
    prisma;
    logger = new common_1.Logger(PrinterService_1.name);
    constructor(settingsService, prisma) {
        this.settingsService = settingsService;
        this.prisma = prisma;
    }
    async getAvailablePrinters() {
        try {
            const { stdout } = await execAsync('powershell "Get-Printer | Select-Object Name"');
            const printers = stdout
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line && line !== 'Name' && !line.startsWith('----'));
            return printers;
        }
        catch (error) {
            this.logger.error('Error fetching printers:', error);
            return [];
        }
    }
    async getPrinterConfigs() {
        return await this.prisma.printerConfig.findMany();
    }
    async getPrinterConfig(terminalId) {
        return await this.prisma.printerConfig.findUnique({
            where: { terminalId },
        });
    }
    async savePrinterConfig(dto) {
        return await this.prisma.printerConfig.upsert({
            where: { terminalId: dto.terminalId },
            update: dto,
            create: dto,
        });
    }
    async printReceipt(printerName, printerWidth, sale, items, payments) {
        try {
            const appConfig = await this.settingsService.getSettings();
            const printerConfig = { width: printerWidth };
            const generator = new receipt_generator_1.ReceiptGenerator(appConfig || undefined, printerConfig);
            const saleWithDetails = {
                ...sale,
                items,
                payments,
            };
            let device;
            let isBufferAdapter = false;
            if (/^COM\d+$/i.test(printerName)) {
                device = new escpos_serialport_1.default(printerName, { baudRate: 9600 });
            }
            else if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(printerName)) {
                device = new escpos_network_1.default(printerName, 9100);
            }
            else {
                device = new BufferAdapter();
                isBufferAdapter = true;
            }
            const printer = new escpos_1.Printer(device);
            const doPrint = async () => {
                return new Promise(async (resolve, reject) => {
                    device.open(async (err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        try {
                            await generator.printSale(printer, saleWithDetails);
                            resolve();
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                });
            };
            await doPrint();
            if (isBufferAdapter) {
                const adapter = device;
                const buffer = adapter.buffer;
                if (buffer.length > 0) {
                    await this.printBufferToSpooler(printerName, buffer);
                }
            }
            return true;
        }
        catch (error) {
            const err = error;
            this.logger.error(`Printing failed: ${err.message}`, err.stack);
            return false;
        }
    }
    async testPrinter(config) {
        try {
            const width = config.width === 58 ? 32 : config.width === 80 ? 48 : 40;
            const appConfig = await this.settingsService.getSettings();
            const generator = new receipt_generator_1.ReceiptGenerator(appConfig || undefined, { width });
            let device;
            let isBufferAdapter = false;
            const printerName = config.printerName;
            if (/^COM\d+$/i.test(printerName)) {
                device = new escpos_serialport_1.default(printerName, { baudRate: 9600 });
            }
            else if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(printerName)) {
                device = new escpos_network_1.default(printerName, 9100);
            }
            else {
                device = new BufferAdapter();
                isBufferAdapter = true;
            }
            const printer = new escpos_1.Printer(device);
            const doPrint = async () => {
                return new Promise(async (resolve, reject) => {
                    device.open(async (err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        try {
                            await generator.printTest(printer);
                            resolve();
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                });
            };
            await doPrint();
            if (isBufferAdapter) {
                const adapter = device;
                const buffer = adapter.buffer;
                if (buffer.length > 0) {
                    await this.printBufferToSpooler(printerName, buffer);
                }
            }
            return true;
        }
        catch (e) {
            this.logger.error('Test print failed', e);
            return false;
        }
    }
    async printBufferToSpooler(printerName, buffer) {
        const filename = `receipt_${Date.now()}.bin`;
        const filePath = (0, path_1.join)((0, os_1.tmpdir)(), filename);
        await (0, promises_1.writeFile)(filePath, buffer);
        const command = `powershell -Command "Get-Content '${filePath}' | Out-Printer -Name '${printerName}'"`;
        this.logger.log(`Executing Spooler command for printer: ${printerName}`);
        await execAsync(command);
        this.logger.log(`Spooler job sent to ${printerName}`);
        try {
            await (0, promises_1.unlink)(filePath);
        }
        catch (e) {
            this.logger.warn(`Failed to delete temp receipt file: ${filePath}`);
        }
    }
    async printSaleById(saleId, terminalId) {
        const sale = await this.prisma.sale.findUnique({
            where: { id: saleId },
            include: {
                items: { include: { product: true } },
                payments: true,
            },
        });
        if (!sale) {
            throw new Error('Venda não encontrada');
        }
        let printerConfig = null;
        if (terminalId) {
            const config = await this.prisma.printerConfig.findUnique({
                where: { terminalId },
            });
            if (config) {
                printerConfig = { printerName: config.printerName, width: config.width };
            }
        }
        if (!printerConfig) {
            const config = await this.prisma.printerConfig.findFirst({
                where: { enabled: true },
            });
            if (config) {
                printerConfig = { printerName: config.printerName, width: config.width };
            }
        }
        if (!printerConfig) {
            throw new Error('Nenhuma impressora configurada');
        }
        return this.printReceipt(printerConfig.printerName, printerConfig.width || 80, sale, sale.items, sale.payments);
    }
    async printRequest(type, destination) {
        const config = {
            terminalId: 'manual-request',
            printerName: destination,
            printerType: 'thermal',
            connection: type,
            width: 80,
            enabled: true,
        };
        return this.testPrinter(config);
    }
};
exports.PrinterService = PrinterService;
exports.PrinterService = PrinterService = PrinterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        prisma_service_1.PrismaService])
], PrinterService);
//# sourceMappingURL=printer.service.js.map