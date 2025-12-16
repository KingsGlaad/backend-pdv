import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CloseSessionDto {
  @IsNotEmpty()
  @IsUUID()
  sessionId: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  finalBalance: number; // Valor contado fisicamente pelo operador
}
