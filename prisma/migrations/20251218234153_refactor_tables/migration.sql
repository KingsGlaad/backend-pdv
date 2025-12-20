/*
  Warnings:

  - You are about to drop the column `cashSessionId` on the `CashDrawerLog` table. All the data in the column will be lost.
  - You are about to drop the column `reason` on the `CashDrawerLog` table. All the data in the column will be lost.
  - You are about to drop the column `cashSessionId` on the `CashMovement` table. All the data in the column will be lost.
  - You are about to drop the column `method` on the `CashMovement` table. All the data in the column will be lost.
  - You are about to drop the column `referenceId` on the `CashMovement` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `CashMovement` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Decimal(10,2)`.
  - You are about to drop the column `active` on the `CashRegister` table. All the data in the column will be lost.
  - You are about to drop the column `closingAmount` on the `CashSession` table. All the data in the column will be lost.
  - You are about to drop the column `openedById` on the `CashSession` table. All the data in the column will be lost.
  - You are about to drop the column `openingAmount` on the `CashSession` table. All the data in the column will be lost.
  - The `status` column on the `CashSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `active` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `maxStock` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `InventoryItem` table. All the data in the column will be lost.
  - You are about to alter the column `minStock` on the `InventoryItem` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,3)` to `Integer`.
  - You are about to alter the column `quantity` on the `InventoryItem` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,3)` to `Integer`.
  - You are about to alter the column `quantity` on the `InventoryMovement` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,3)` to `Integer`.
  - You are about to drop the column `canceledAt` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `unitPrice` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `finalAmount` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `Sale` table. All the data in the column will be lost.
  - You are about to alter the column `discount` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `Decimal(12,2)` to `Decimal(10,2)`.
  - The `status` column on the `Sale` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `ProductRecipe` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[code]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `action` to the `CashDrawerLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cashRegisterId` to the `CashDrawerLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CashDrawerLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `CashMovement` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `CashMovement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `initialBalance` to the `CashSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CashSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `InventoryMovement` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `InventoryMovement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `price` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saleId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - The required column `code` was added to the `Sale` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `paymentMethod` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CashDrawerLog" DROP CONSTRAINT "CashDrawerLog_cashSessionId_fkey";

-- DropForeignKey
ALTER TABLE "CashMovement" DROP CONSTRAINT "CashMovement_cashSessionId_fkey";

-- DropForeignKey
ALTER TABLE "CashSession" DROP CONSTRAINT "CashSession_openedById_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRecipe" DROP CONSTRAINT "ProductRecipe_inventoryItemId_fkey";

-- DropForeignKey
ALTER TABLE "ProductRecipe" DROP CONSTRAINT "ProductRecipe_productId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_orderId_fkey";

-- DropIndex
DROP INDEX "CashDrawerLog_cashSessionId_idx";

-- DropIndex
DROP INDEX "CashMovement_cashSessionId_idx";

-- DropIndex
DROP INDEX "CashRegister_name_key";

-- DropIndex
DROP INDEX "CashSession_cashRegisterId_openedAt_idx";

-- DropIndex
DROP INDEX "CashSession_cashRegisterId_status_key";

-- DropIndex
DROP INDEX "InventoryMovement_inventoryItemId_idx";

-- DropIndex
DROP INDEX "OrderItem_orderId_idx";

-- DropIndex
DROP INDEX "Sale_createdAt_idx";

-- DropIndex
DROP INDEX "Sale_orderId_key";

-- DropIndex
DROP INDEX "Sale_status_idx";

-- AlterTable
ALTER TABLE "CashDrawerLog" DROP COLUMN "cashSessionId",
DROP COLUMN "reason",
ADD COLUMN     "action" TEXT NOT NULL,
ADD COLUMN     "cashRegisterId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CashMovement" DROP COLUMN "cashSessionId",
DROP COLUMN "method",
DROP COLUMN "referenceId",
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "sessionId" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "CashRegister" DROP COLUMN "active",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "CashSession" DROP COLUMN "closingAmount",
DROP COLUMN "openedById",
DROP COLUMN "openingAmount",
ADD COLUMN     "difference" DECIMAL(10,2),
ADD COLUMN     "finalBalance" DECIMAL(10,2),
ADD COLUMN     "initialBalance" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "systemBalance" DECIMAL(10,2),
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'OPEN';

-- AlterTable
ALTER TABLE "InventoryItem" DROP COLUMN "active",
DROP COLUMN "category",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "maxStock",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "unit",
ADD COLUMN     "productId" TEXT NOT NULL,
ALTER COLUMN "minStock" SET DEFAULT 5,
ALTER COLUMN "minStock" SET DATA TYPE INTEGER,
ALTER COLUMN "quantity" SET DEFAULT 0,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "InventoryMovement" ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "saleId" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "canceledAt",
DROP COLUMN "createdAt",
DROP COLUMN "status",
DROP COLUMN "unitPrice",
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "saleId" TEXT NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "finalAmount",
DROP COLUMN "orderId",
DROP COLUMN "totalAmount",
ADD COLUMN     "cashSessionId" TEXT,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "customerCpf" TEXT,
ADD COLUMN     "paymentMethod" TEXT NOT NULL,
ADD COLUMN     "total" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "discount" DROP NOT NULL,
ALTER COLUMN "discount" DROP DEFAULT,
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(10,2),
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'COMPLETED';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'CASHIER';

-- DropTable
DROP TABLE "ProductRecipe";

-- CreateIndex
CREATE UNIQUE INDEX "Sale_code_key" ON "Sale"("code");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_cashSessionId_fkey" FOREIGN KEY ("cashSessionId") REFERENCES "CashSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashSession" ADD CONSTRAINT "CashSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashMovement" ADD CONSTRAINT "CashMovement_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "CashSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashDrawerLog" ADD CONSTRAINT "CashDrawerLog_cashRegisterId_fkey" FOREIGN KEY ("cashRegisterId") REFERENCES "CashRegister"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashDrawerLog" ADD CONSTRAINT "CashDrawerLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryMovement" ADD CONSTRAINT "InventoryMovement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
