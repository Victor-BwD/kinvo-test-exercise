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

  async update(saldoDTO: createSaldoDTO) {
    const saldoAntigo = await this.prisma.saldo.findUnique({
      where: { id: 1 }
    });

    if (!saldoAntigo) {
      throw new Error("Movimentação não encontrada");
    }

    const increaseValue = saldoAntigo.valor + saldoDTO.valor;

    return await this.prisma.saldo.update({
      where: { id: 1 },
      data: {
        valor: increaseValue
      }
    });
  }
}

export { SaldoRepository };
