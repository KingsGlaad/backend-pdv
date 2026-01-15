export declare const UpdateProductSchema: import("zod").ZodObject<{
    code: import("zod").ZodOptional<import("zod").ZodString>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    price: import("zod").ZodOptional<import("zod").ZodNumber>;
    imageUrl: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
    category: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
    description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>;
declare const UpdateProductDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    code: import("zod").ZodOptional<import("zod").ZodString>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    price: import("zod").ZodOptional<import("zod").ZodNumber>;
    imageUrl: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
    category: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
    description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>> & {
    io: "input";
};
export declare class UpdateProductDto extends UpdateProductDto_base {
}
export {};
