/*
  Warnings:

  - The `status` column on the `Sale` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `CashMovement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `finalAmount` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CashMovement" DROP COLUMN "type",
ADD COLUMN     "type" "CashMovementType" NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "saleId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "finalAmount" DECIMAL(10,2) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "SaleStatus" NOT NULL DEFAULT 'COMPLETED';
