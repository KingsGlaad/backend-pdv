import { SettingsService } from '../settings/settings.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrinterConfigDto } from './dto/printer-config.dto';
export declare class PrinterService {
    private readonly settingsService;
    private readonly prisma;
    private readonly logger;
    constructor(settingsService: SettingsService, prisma: PrismaService);
    getAvailablePrinters(): Promise<string[]>;
    getPrinterConfigs(): Promise<{
        id: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
        terminalId: string;
        printerName: string;
        printerType: string;
        connection: string;
        width: number;
        enabled: boolean;
    }[]>;
    getPrinterConfig(terminalId: string): Promise<{
        id: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
        terminalId: string;
        printerName: string;
        printerType: string;
        connection: string;
        width: number;
        enabled: boolean;
    } | null>;
    savePrinterConfig(dto: PrinterConfigDto): Promise<{
        id: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
        terminalId: string;
        printerName: string;
        printerType: string;
        connection: string;
        width: number;
        enabled: boolean;
    }>;
    printReceipt(printerName: string, printerWidth: number, sale: any, items: any[], payments: any[]): Promise<boolean>;
    testPrinter(config: PrinterConfigDto): Promise<boolean>;
    private printBufferToSpooler;
    printSaleById(saleId: string, terminalId?: string): Promise<boolean>;
    printRequest(type: string, destination: string): Promise<boolean>;
}
