import { PrismaService } from 'src/prisma/prisma.service';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, PrismaService],
  exports: [SettingsService],
})
export class SettingsModule {}
