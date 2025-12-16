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
  ],
  providers: [UsersService, CashDrawerService, CashMovementService, CashSessionService],
  controllers: [UsersController],
})
export class AppModule {}
