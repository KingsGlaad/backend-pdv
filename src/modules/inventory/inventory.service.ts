import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddStockDto } from './dto/add-stock.dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}
  async addStock(id: string, dto: AddStockDto) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
  }
}
