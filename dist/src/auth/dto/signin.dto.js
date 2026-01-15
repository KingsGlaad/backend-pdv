"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInDto = exports.SignInSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.SignInSchema = zod_1.z.object({
    email: zod_1.z.email(),
    password: zod_1.z.string().min(6),
});
class SignInDto extends (0, nestjs_zod_1.createZodDto)(exports.SignInSchema) {
}
exports.SignInDto = SignInDto;
//# sourceMappingURL=signin.dto.js.map