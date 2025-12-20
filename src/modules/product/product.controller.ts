import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import {
  Controller,
  Post,
  UseGuards,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ZodValidationPipe } from 'nestjs-zod';
import { CreateProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post('create')
  async createProduct(
    @Body(new ZodValidationPipe(CreateProductDto)) createProductDto: CreateProductDto,
  ) {
    return this.service.addProduct(createProductDto);
  }

  @Get()
  async getProducts(@Query('search') search?: string) {
    return this.service.getProducts(search);
  }
  @Get('code/:code')
  findByCode(@Param('code') code: string) {
    return this.service.findByCode(code);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.service.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
