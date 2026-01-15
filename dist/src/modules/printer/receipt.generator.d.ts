import { Config, Sale, OrderItem, Payment, Product, Order, PrinterConfig } from '../../generated/prisma/client';
type SaleWithDetails = Sale & {
    items: (OrderItem & {
        product: Product;
    })[];
    payments: Payment[];
    orders?: Order[];
};
export declare class ReceiptGenerator {
    private config?;
    private printerConfig?;
    constructor(config?: Config | undefined, printerConfig?: PrinterConfig | undefined);
    generateReceiptText(sale: SaleWithDetails): string;
    generateTestText(): string;
    printText(text: string, printerName?: string): Promise<void>;
    printSale(sale: SaleWithDetails, printerName?: string): Promise<void>;
    printTest(printerName?: string): Promise<void>;
    private formatCurrency;
}
export {};
