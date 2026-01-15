import { PrismaService } from 'src/prisma/prisma.service';
import { AddStockDto } from './dto/add-stock.dto';
export declare class InventoryService {
    private prisma;
    constructor(prisma: PrismaService);
    addStock(id: string, dto: AddStockDto): Promise<void>;
}
