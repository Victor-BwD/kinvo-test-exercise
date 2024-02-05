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

  async list() {
    return await this.prisma.saldo.findMany();
  }

  async count() {
    return await this.prisma.saldo.count();
  }
}

export { SaldoRepository };
