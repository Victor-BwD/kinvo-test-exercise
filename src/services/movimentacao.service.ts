import {
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
}

export { MovimentacaoServices };
