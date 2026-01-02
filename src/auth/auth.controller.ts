// src/modules/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('signin')
  async signIn(@Body() dto: SignInDto) {
    return this.service.signIn(dto.email, dto.password);
  }

  @Post('signout')
  signOut() {
    return { message: 'Signed out' };
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() req: any) {
    return req.user;
  }
}
