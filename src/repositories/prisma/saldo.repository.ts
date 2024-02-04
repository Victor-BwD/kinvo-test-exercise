import { BasePrismaRepository } from "./base.prisma.repository";
import { ISaldoRepository, createSaldoDTO } from "./interfaces/saldo.repository.type";

class SaldoRepository extends BasePrismaRepository implements ISaldoRepository {
  async create(saldoDTO: createSaldoDTO) {
    const count = await this.prisma.saldo.count();
    if (count > 0) {
      throw new Error("Já existe um saldo cadastrado.");
    }

    const saldo = await this.prisma.saldo.create({
      data: {
        valor: saldoDTO.valor
      }
    });

    return saldo;
  }
}

export { SaldoRepository };
