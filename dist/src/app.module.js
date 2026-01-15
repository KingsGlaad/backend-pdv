"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const orders_module_1 = require("./modules/orders/orders.module");
const users_service_1 = require("./modules/users/users.service");
const users_controller_1 = require("./modules/users/users.controller");
const cash_drawer_service_1 = require("./modules/cash/cash-drawer.service");
const cash_movement_service_1 = require("./modules/cash/cash-movement.service");
const cash_session_service_1 = require("./modules/cash/cash-session.service");
const cash_controller_1 = require("./modules/cash/cash.controller");
const cash_module_1 = require("./modules/cash/cash.module");
const inventory_service_1 = require("./modules/inventory/inventory.service");
const product_service_1 = require("./modules/product/product.service");
const product_controller_1 = require("./modules/product/product.controller");
const product_module_1 = require("./modules/product/product.module");
const sales_module_1 = require("./modules/sales/sales.module");
const settings_module_1 = require("./modules/settings/settings.module");
const printer_module_1 = require("./modules/printer/printer.module");
const events_module_1 = require("./modules/events/events.module");
jwt_1.JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '8h' },
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            orders_module_1.OrdersModule,
            cash_module_1.CashModule,
            product_module_1.ProductModule,
            sales_module_1.SalesModule,
            settings_module_1.SettingsModule,
            printer_module_1.PrinterModule,
            events_module_1.EventsModule,
        ],
        providers: [
            users_service_1.UsersService,
            cash_drawer_service_1.CashDrawerService,
            cash_movement_service_1.CashMovementService,
            cash_session_service_1.CashSessionService,
            inventory_service_1.InventoryService,
            product_service_1.ProductService,
        ],
        controllers: [users_controller_1.UsersController, cash_controller_1.CashController, product_controller_1.ProductController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map