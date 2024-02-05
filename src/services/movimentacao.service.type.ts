import { IMovimentacao } from "../domain";
import { crateMovimentacaoDTO } from "../repositories/prisma/interfaces/movimentacao.repository.type";

interface IMovimentacaoService {
  create(movimentacaoDTO: crateMovimentacaoDTO): Promise<IMovimentacao>;
  list(): Promise<IMovimentacao[]>;
  update(id: number, movimentacaoDTO: crateMovimentacaoDTO): Promise<IMovimentacao>;
}

export { IMovimentacaoService };
