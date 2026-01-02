import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SettingsService } from './settings.service';
import { CreateSettingsDto } from './dto/create-settings.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import * as fs from 'fs';
import * as path from 'path';

@UseGuards(JwtAuthGuard)
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  async getSettings() {
    return this.settingsService.getSettings();
  }

  @Post()
  async createSettings(@Body() dto: CreateSettingsDto) {
    return this.settingsService.saveSettings(dto);
  }

  @Post('upload/logo')
  @UseInterceptors(FileInterceptor('file'))
  uploadLogo(@UploadedFile() file: Express.Multer.File) {
    // Navigate out of backend (cwd) into pdv-frontend
    const uploadDir = path.join(process.cwd(), '..', 'pdv-frontend', 'public', 'uploads');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileExt = path.extname(file.originalname);
    const fileName = `logo-${Date.now()}${fileExt}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, file.buffer);

    // Return current path relative to Next.js public URL
    return { url: `/uploads/${fileName}` };
  }
}
