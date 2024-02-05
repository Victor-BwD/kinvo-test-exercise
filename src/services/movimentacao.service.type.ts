import { IMovimentacao } from "../domain";
import {
  IMovimentacaoQueryParams,
  crateMovimentacaoDTO
} from "../repositories/prisma/interfaces/movimentacao.repository.type";

interface IMovimentacaoService {
  create(movimentacaoDTO: crateMovimentacaoDTO): Promise<IMovimentacao>;
  list(dataMovimentacao: IMovimentacaoQueryParams): Promise<IMovimentacao[]>;
  update(id: number, movimentacaoDTO: crateMovimentacaoDTO): Promise<IMovimentacao>;
}

export { IMovimentacaoService };
