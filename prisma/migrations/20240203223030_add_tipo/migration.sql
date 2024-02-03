/*
  Warnings:

  - Added the required column `tipo` to the `Movimentacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movimentacoes" ADD COLUMN     "tipo" VARCHAR(15) NOT NULL;
