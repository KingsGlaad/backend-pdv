import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async addProduct(dto: CreateProductDto) {
    const existingProduct = await this.prisma.product.findUnique({
      where: { code: dto.code },
    });
    if (existingProduct) {
      throw new BadRequestException('Produto já existe');
    }
    return this.prisma.product.create({
      data: {
        code: dto.code,
        name: dto.name,
        price: dto.price,
        category: dto.category || null,
        description: dto.description || null,
      },
    });
  }
  async getProducts(search?: string) {
    return this.prisma.product.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { code: { contains: search } },
            ],
          }
        : undefined,
      include: {
        orderItems: true,
      },
    });
  }
  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }

    return {
      ...product,
      /*stock: product.inventoryItems?.[0]?.quantity || 0,*/
    };
  }
  async findByCode(code: string) {
    const product = await this.prisma.product.findUnique({
      where: { code },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }

    return {
      ...product,
      /*stock: product.inventoryItems?.[0]?.quantity || 0,*/
    };
  }
  async findByName(name: string) {
    const product = await this.prisma.product.findMany({
      where: { name },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }

    return {
      ...product,
      /*stock: product.inventoryItems?.[0]?.quantity || 0,*/
    };
  }
  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id); // Garante que existe

    // Se estiver a atualizar o código, verifica duplicidade
    if (dto.code) {
      const productWithCode = await this.prisma.product.findUnique({
        where: { code: dto.code },
      });
      if (productWithCode && productWithCode.id !== id) {
        throw new BadRequestException('Este código já está em uso por outro produto.');
      }
    }

    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.product.delete({
      where: { id },
    });
  }
}
