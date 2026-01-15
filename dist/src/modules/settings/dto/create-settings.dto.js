"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingsDto = exports.CreateSettingsSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const settings_dto_1 = require("./settings.dto");
const zod_1 = require("zod");
exports.CreateSettingsSchema = settings_dto_1.BaseSettingsSchema.extend({
    id: zod_1.z.string().optional(),
});
class CreateSettingsDto extends (0, nestjs_zod_1.createZodDto)(exports.CreateSettingsSchema) {
}
exports.CreateSettingsDto = CreateSettingsDto;
//# sourceMappingURL=create-settings.dto.js.map