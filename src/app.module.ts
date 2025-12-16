import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { OrdersModule } from './modules/orders/orders.module';
import { UsersService } from './modules/users/users.service';
import { UsersController } from './modules/users/users.controller';
import { CashDrawerService } from '@modules/cash/cash-drawer.service';
import { CashMovementService } from '@modules/cash/cash-movement.service';
import { CashSessionService } from '@modules/cash/cash-session.service';
import { CashController } from './modules/cash/cash.controller';
import { CashModule } from './modules/cash/cash.module';
import { InventoryService } from './modules/inventory/inventory.service';
import { ProductService } from './modules/product/product.service';
import { ProductController } from './modules/product/product.controller';
import { ProductModule } from './modules/product/product.module';

JwtModule.register({
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '8h' },
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    OrdersModule,
    CashModule,
    ProductModule,
  ],
  providers: [UsersService, CashDrawerService, CashMovementService, CashSessionService, InventoryService, ProductService],
  controllers: [UsersController, CashController, ProductController],
})
export class AppModule {}
