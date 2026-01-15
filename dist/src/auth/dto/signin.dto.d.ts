import { z } from 'zod';
export declare const SignInSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
declare const SignInDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>> & {
    io: "input";
};
export declare class SignInDto extends SignInDto_base {
}
export {};
