import { ProductService } from './product.service';
import { CreateProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private service;
    constructor(service: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<{
        id: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category: string | null;
        code: string;
        description: string | null;
        imageUrl: string | null;
    }>;
    getProducts(search?: string, page?: string, limit?: string): Promise<{
        data: ({
            orderItems: {
                id: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                saleId: string | null;
                orderId: string | null;
                productId: string;
                quantity: number;
            }[];
        } & {
            id: string;
            name: string;
            active: boolean;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            category: string | null;
            code: string;
            description: string | null;
            imageUrl: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    findByCode(code: string): Promise<{
        id: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category: string | null;
        code: string;
        description: string | null;
        imageUrl: string | null;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category: string | null;
        code: string;
        description: string | null;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        price: import("@prisma/client-runtime-utils").Decimal;
        category: string | null;
        code: string;
        description: string | null;
        imageUrl: string | null;
    }>;
}
