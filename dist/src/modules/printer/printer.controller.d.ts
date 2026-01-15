import { PrinterService } from './printer.service';
import { PrinterConfigDto } from './dto/printer-config.dto';
export declare class PrinterController {
    private readonly printerService;
    constructor(printerService: PrinterService);
    print(data: {
        ip: string;
    }): Promise<{
        message: string;
    }>;
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
    testPrinter(dto: PrinterConfigDto): Promise<boolean>;
    reprintSale(id: string, body: {
        terminalId?: string;
    }): Promise<boolean>;
}
