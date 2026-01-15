"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductService = class ProductService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addProduct(dto) {
        const existingProduct = await this.prisma.product.findUnique({
            where: { code: dto.code },
        });
        if (existingProduct) {
            throw new common_1.BadRequestException('Produto já existe');
        }
        return this.prisma.product.create({
            data: {
                code: dto.code,
                name: dto.name,
                price: dto.price,
                category: dto.category || null,
                description: dto.description || null,
                imageUrl: dto.imageUrl || null,
            },
        });
    }
    async getProducts(search, page = 1, limit = 10) {
        const sanitizedSearch = search?.trim();
        const skip = (page - 1) * limit;
        const where = sanitizedSearch
            ? {
                OR: [
                    { name: { contains: sanitizedSearch, mode: 'insensitive' } },
                    { code: { contains: sanitizedSearch } },
                ],
            }
            : undefined;
        const [total, products] = await Promise.all([
            this.prisma.product.count({ where }),
            this.prisma.product.findMany({
                where,
                include: {
                    orderItems: true,
                },
                orderBy: {
                    name: 'asc',
                },
                skip,
                take: limit,
            }),
        ]);
        const lastPage = Math.ceil(total / limit);
        return {
            data: products,
            meta: {
                total,
                page,
                lastPage,
            },
        };
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
        });
        if (!product) {
            throw new common_1.NotFoundException('Produto não encontrado.');
        }
        return {
            ...product,
        };
    }
    async findByCode(code) {
        const product = await this.prisma.product.findUnique({
            where: { code },
        });
        if (!product) {
            throw new common_1.NotFoundException('Produto não encontrado.');
        }
        return {
            ...product,
        };
    }
    async findByName(name) {
        const product = await this.prisma.product.findMany({
            where: { name },
        });
        if (!product) {
            throw new common_1.NotFoundException('Produto não encontrado.');
        }
        return {
            ...product,
        };
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.code) {
            const productWithCode = await this.prisma.product.findUnique({
                where: { code: dto.code },
            });
            if (productWithCode && productWithCode.id !== id) {
                throw new common_1.BadRequestException('Este código já está em uso por outro produto.');
            }
        }
        return this.prisma.product.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.product.delete({
            where: { id },
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map