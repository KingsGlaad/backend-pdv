/*
  Warnings:

  - You are about to drop the column `userId` on the `CashRegister` table. All the data in the column will be lost.
  - You are about to drop the column `cashMovement` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cashRegisterId,status]` on the table `CashSession` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CashRegister" DROP CONSTRAINT "CashRegister_userId_fkey";

-- DropIndex
DROP INDEX "CashSession_cashRegisterId_status_openedAt_idx";

-- AlterTable
ALTER TABLE "CashRegister" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "cashMovement",
ADD COLUMN     "cashMovementId" TEXT;

-- CreateIndex
CREATE INDEX "CashSession_cashRegisterId_openedAt_idx" ON "CashSession"("cashRegisterId", "openedAt");

-- CreateIndex
CREATE UNIQUE INDEX "CashSession_cashRegisterId_status_key" ON "CashSession"("cashRegisterId", "status");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cashMovementId_fkey" FOREIGN KEY ("cashMovementId") REFERENCES "CashMovement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
