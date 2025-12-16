/*
  Warnings:

  - Added the required column `maxStock` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minStock` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InventoryItem" ADD COLUMN     "category" TEXT,
ADD COLUMN     "maxStock" DECIMAL(12,3) NOT NULL,
ADD COLUMN     "minStock" DECIMAL(12,3) NOT NULL,
ADD COLUMN     "price" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "quantity" DECIMAL(12,3) NOT NULL;
