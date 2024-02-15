import { saldo } from "@prisma/client";
import { createSaldoDTO } from "../repositories/prisma/interfaces/saldo.repository.type";

interface ISaldoService {
  create(saldoDTO: createSaldoDTO): Promise<saldo>;
  list(): Promise<saldo[]>;
  update(saldoDTO: createSaldoDTO): Promise<saldo>;
}

export { ISaldoService };
