import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';

@Module({
  imports: [PrismaModule],
  providers: [SettingsService],
  exports: [SettingsService],
  controllers: [SettingsController],
})
export class SettingsModule {}
