/*
  Warnings:

  - Added the required column `nome` to the `Categorias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categorias" ADD COLUMN     "nome" VARCHAR(15) NOT NULL;
