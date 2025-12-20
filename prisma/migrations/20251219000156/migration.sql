/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CashRegister` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CashRegister_name_key" ON "CashRegister"("name");
