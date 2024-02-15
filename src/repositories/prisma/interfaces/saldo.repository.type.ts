import { saldo } from "@prisma/client";

interface ISaldoRepository {
  create: (saldoDTO: createSaldoDTO) => Promise<saldo>;
  count: () => Promise<number>;
  list: () => Promise<saldo[]>;
  update: (saldoDTO: createSaldoDTO) => Promise<saldo>;
}

interface createSaldoDTO {
  valor: number;
}

export { ISaldoRepository, createSaldoDTO };
