import { PrismaClient } from "@prisma/client";
import { ISaldoRepository, createSaldoDTO } from "../repositories/prisma/interfaces/saldo.repository.type";
import { ISaldoService } from "../services/saldo.service.type";
import { SaldoRepository } from "../repositories/prisma/saldo.repository";
import { SaldoServices } from "../services/saldo.services";

class SaldoController {
  prisma = new PrismaClient();
  saldoRepository: ISaldoRepository;
  saldoService: ISaldoService;

  constructor() {
    this.saldoRepository = new SaldoRepository();
    this.saldoService = new SaldoServices(this.saldoRepository);
  }

  async create(saldoDTO: createSaldoDTO) {
    return await this.saldoService.create(saldoDTO);
  }
}

export { SaldoController };
