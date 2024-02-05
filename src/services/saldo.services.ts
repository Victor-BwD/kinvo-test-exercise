import { ISaldoRepository, createSaldoDTO } from "../repositories/prisma/interfaces/saldo.repository.type";

class SaldoServices {
  saldoRepository: ISaldoRepository;

  constructor(saldoRepository: ISaldoRepository) {
    this.saldoRepository = saldoRepository;
  }

  async create(saldoDTO: createSaldoDTO) {
    if (saldoDTO.valor < 0) {
      throw new Error("Saldo não pode ser negativo");
    }

    const count = await this.saldoRepository.count();
    if (count > 0) {
      throw new Error("Já existe um saldo cadastrado");
    }

    return await this.saldoRepository.create(saldoDTO);
  }

  async list() {
    const listSaldo = await this.saldoRepository.list();

    if (listSaldo.length <= 0) {
      throw new Error("Nenhum saldo encontrado");
    }

    return listSaldo;
  }
}

export { SaldoServices };
