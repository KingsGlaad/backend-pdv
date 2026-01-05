// src/modules/users/users.controller.ts
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserSchema } from './dto/create-user.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('create')
  @Roles('ADMIN', 'MANAGER')
  async create(@Body() body: unknown) {
    const dto = CreateUserSchema.parse(body);
    return this.service.createUser(dto);
  }

  @Get()
  @Roles('ADMIN', 'MANAGER')
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
  ) {
    return this.service.findAll({ page, limit, search });
  }

  @Patch(':id')
  @Roles('ADMIN', 'MANAGER')
  async update(@Param('id') id: string, @Body() body: unknown) {
    // For now using partial of create schema or just passing body if we don't have update schema yet
    // Ideally we should have UpdateUserSchema
    return this.service.update(id, body);
  }

  @Delete(':id')
  @Roles('ADMIN')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
