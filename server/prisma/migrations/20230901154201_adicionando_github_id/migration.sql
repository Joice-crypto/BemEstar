/*
  Warnings:

  - A unique constraint covering the columns `[githubId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN "githubId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_githubId_key" ON "Usuario"("githubId");
