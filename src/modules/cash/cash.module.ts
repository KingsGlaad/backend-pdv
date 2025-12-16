import { Module } from '@nestjs/common';
import { CashController } from './cash.controller';
import { CashSessionService } from './cash-session.service';
import { CashMovementService } from './cash-movement.service';
import { CashDrawerService } from './cash-drawer.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CashController],
  providers: [CashSessionService, CashMovementService, CashDrawerService],
  exports: [CashSessionService], // Exporta se precisar verificar sessão em outros módulos (ex: Orders)
})
export class CashModule {}
