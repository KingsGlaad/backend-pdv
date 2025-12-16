import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class OpenSessionDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  initialBalance!: number;

  @IsNotEmpty()
  @IsUUID()
  cashRegisterId!: string;
}
