import z from 'zod';
export declare const getSalesFilterDto: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const GetSalesFilterDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>> & {
    io: "input";
};
export declare class GetSalesFilterDto extends GetSalesFilterDto_base {
}
export {};
