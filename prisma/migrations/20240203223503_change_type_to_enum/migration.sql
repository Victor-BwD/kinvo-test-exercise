/*
  Warnings:

  - Changed the type of `tipo` on the `Movimentacoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('entrada', 'saida');

-- AlterTable
ALTER TABLE "Movimentacoes" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "Tipo" NOT NULL;
