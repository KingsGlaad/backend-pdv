import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSettingsDto } from './dto/create-settings.dto';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async getSettings() {
    return await this.prisma.config.findFirst();
  }

  async saveSettings(dto: CreateSettingsDto) {
    const settings = await this.prisma.config.findFirst();

    if (settings) {
      // Remove id from dto if it exists to avoid trying to update the primary key with same/different value
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...data } = dto;
      return this.prisma.config.update({
        where: { id: settings.id },
        data,
      });
    }

    return this.prisma.config.create({ data: dto });
  }
}
