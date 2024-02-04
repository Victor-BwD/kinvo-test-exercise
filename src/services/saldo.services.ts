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

    return await this.saldoRepository.create(saldoDTO);
  }
}

export { SaldoServices };
