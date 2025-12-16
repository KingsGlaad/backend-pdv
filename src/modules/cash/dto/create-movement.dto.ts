import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export enum MovementType {
  SUPPLY = 'SUPPLY', // Suprimento (Entrada)
  BLEED = 'BLEED', // Sangria (Saída)
  SALE = 'SALE', // Venda (Entrada)
  WITHDRAW = 'WITHDRAW', // Retirada (Saída)
}

export class CreateMovementDto {
  @IsNotEmpty()
  @IsUUID()
  sessionId: string;

  @IsNotEmpty()
  @IsEnum(MovementType)
  type: MovementType;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsOptional()
  @IsString()
  reason?: string;
}
