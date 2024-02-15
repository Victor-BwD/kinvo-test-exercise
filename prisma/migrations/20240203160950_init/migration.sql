-- CreateTable
CREATE TABLE "Movimentacoes" (
    "id" SERIAL NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "descricao" VARCHAR(120) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(0) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movimentacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(120) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tbl_movimentacoes_id_categoria_idx" ON "Movimentacoes"("id_categoria");

-- CreateIndex
CREATE INDEX "tbl_movimentacoes_id_idx" ON "Movimentacoes"("id");

-- AddForeignKey
ALTER TABLE "Movimentacoes" ADD CONSTRAINT "Movimentacoes_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
