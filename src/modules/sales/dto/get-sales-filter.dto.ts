import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const getSalesFilterDto = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).default(10),
  search: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  userId: z.string().optional(),
});

export class GetSalesFilterDto extends createZodDto(getSalesFilterDto) {}
