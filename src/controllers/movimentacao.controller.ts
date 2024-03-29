import { PrismaClient } from "@prisma/client";

import { IMovimentacaoController } from "./movimentacao.controller.type";
import {
  IMovimentacaoQueryParams,
  IMovimentacaoRepository,
  crateMovimentacaoDTO
} from "../repositories/prisma/interfaces/movimentacao.repository.type";
import { IMovimentacaoService } from "../services/movimentacao.service.type";
import { MovimentacaoRepository } from "../repositories/prisma/movimentacao.repository";
import { MovimentacaoServices } from "../services/movimentacao.service";

class MovimentacaoController implements IMovimentacaoController {
  prisma = new PrismaClient();
  movimentacaoRepository: IMovimentacaoRepository;
  movimentacaoService: IMovimentacaoService;

  constructor() {
    this.movimentacaoRepository = new MovimentacaoRepository();
    this.movimentacaoService = new MovimentacaoServices(this.movimentacaoRepository);
  }

  async create(movimentacaoDTO: crateMovimentacaoDTO) {
    return await this.movimentacaoService.create(movimentacaoDTO);
  }

  async list(dataMovimentacao: IMovimentacaoQueryParams, page: number, pageSize: number) {
    return await this.movimentacaoService.list(dataMovimentacao, page, pageSize);
  }

  async update(id: number, movimentacaoDTO: crateMovimentacaoDTO) {
    return await this.movimentacaoService.update(id, movimentacaoDTO);
  }
}

export { MovimentacaoController };
