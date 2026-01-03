import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { PrismaService } from '../../prisma/prisma.service';
import { PrintingService } from './printing.service';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, PrismaService, PrintingService],
  exports: [SettingsService, PrintingService],
})
export class SettingsModule {}
