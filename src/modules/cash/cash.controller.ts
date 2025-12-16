import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CashSessionService } from './cash-session.service';
import { CashMovementService } from './cash-movement.service';
import { OpenSessionDto } from './dto/open-session.dto';
import { CloseSessionDto } from './dto/close-session.dto';
import { CreateMovementDto } from './dto/create-movement.dto';

@Controller('cash')
@UseGuards(JwtAuthGuard)
export class CashController {
  constructor(
    private readonly sessionService: CashSessionService,
    private readonly movementService: CashMovementService,
  ) {}

  @Get('status')
  async getStatus(@Request() req) {
    // Retorna a sessão ativa do usuário logado (se houver)
    const session = await this.sessionService.getActiveSession(req.user.id);
    return {
      isOpen: !!session,
      session: session,
    };
  }

  @Post('open')
  async openSession(@Request() req, @Body() dto: OpenSessionDto) {
    return this.sessionService.openSession(req.user.id, dto);
  }

  @Post('close')
  async closeSession(@Request() req, @Body() dto: CloseSessionDto) {
    return this.sessionService.closeSession(req.user.id, dto);
  }

  @Post('movement')
  async createMovement(@Request() req, @Body() dto: CreateMovementDto) {
    return this.movementService.create(req.user.id, dto);
  }
}
