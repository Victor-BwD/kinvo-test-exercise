import {
  IMovimentacaoQueryParams,
  IMovimentacaoRepository,
  crateMovimentacaoDTO
} from "../repositories/prisma/interfaces/movimentacao.repository.type";
import { IMovimentacaoService } from "./movimentacao.service.type";

class MovimentacaoServices implements IMovimentacaoService {
  movimentacaoRepository: IMovimentacaoRepository;

  constructor(movimentacaoRepository: IMovimentacaoRepository) {
    this.movimentacaoRepository = movimentacaoRepository;
  }

  async create(movimentacaoDTO: crateMovimentacaoDTO) {
    return await this.movimentacaoRepository.create(movimentacaoDTO);
  }

  async list(dataMovimentacao: IMovimentacaoQueryParams, page: number, pageSize: number) {
    const listMovimentacao = await this.movimentacaoRepository.list(dataMovimentacao, page, pageSize);

    if (listMovimentacao.length <= 0) {
      throw new Error("Nenhuma movimentação encontrada");
    }

    return listMovimentacao;
  }

  async update(id: number, movimentacaoDTO: crateMovimentacaoDTO) {
    return await this.movimentacaoRepository.update(id, movimentacaoDTO);
  }
}

export { MovimentacaoServices };
