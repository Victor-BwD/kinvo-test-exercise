-- CreateTable
CREATE TABLE "saldo" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saldo_pkey" PRIMARY KEY ("id")
);
