import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const printerConfigDto = z.object({
  terminalId: z.string(),
  name: z.string().optional(),
  printerName: z.string().min(1, 'O nome do printer é obrigatório'),
  printerType: z.string().min(1, 'O tipo do printer é obrigatório'),
  connection: z.string().min(1, 'A conexão do printer é obrigatória'),
  width: z.number().optional(),
  enabled: z.boolean().optional(),
});

export class PrinterConfigDto extends createZodDto(printerConfigDto) {}
