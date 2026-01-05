import { Module } from '@nestjs/common';
import { PrinterController } from './printer.controller';
import { PrinterService } from './printer.service';
import { SettingsModule } from '../settings/settings.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [SettingsModule],
  controllers: [PrinterController],
  providers: [PrinterService, PrismaService],
  exports: [PrinterService],
})
export class PrinterModule {}
