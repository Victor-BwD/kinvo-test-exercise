import { BasePrismaRepository } from "./base.prisma.repository";
import { ISaldoRepository, createSaldoDTO } from "./interfaces/saldo.repository.type";

class SaldoRepository extends BasePrismaRepository implements ISaldoRepository {
  async create(saldoDTO: createSaldoDTO) {
    const saldo = await this.prisma.saldo.create({
      data: {
        valor: saldoDTO.valor
      }
    });

    return saldo;
  }
}

export { SaldoRepository };
