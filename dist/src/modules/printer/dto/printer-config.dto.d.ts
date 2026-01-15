import { z } from 'zod';
export declare const printerConfigDto: z.ZodObject<{
    terminalId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    printerName: z.ZodString;
    printerType: z.ZodString;
    connection: z.ZodString;
    width: z.ZodOptional<z.ZodNumber>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const PrinterConfigDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    terminalId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    printerName: z.ZodString;
    printerType: z.ZodString;
    connection: z.ZodString;
    width: z.ZodOptional<z.ZodNumber>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>> & {
    io: "input";
};
export declare class PrinterConfigDto extends PrinterConfigDto_base {
}
export {};
