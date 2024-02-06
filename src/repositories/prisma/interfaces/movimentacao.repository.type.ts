import { Movimentacoes, Tipo } from "@prisma/client";

interface IMovimentacaoRepository {
  create(movimentacaoDTO: crateMovimentacaoDTO): Promise<Movimentacoes>;
  list(dataMovimentacao: IMovimentacaoQueryParams, page: number, pageSize: number): Promise<Movimentacoes[]>;
  update(id: number, movimentacaoDTO: crateMovimentacaoDTO): Promise<Movimentacoes>;
}

interface IMovimentacaoQueryParams {
  dataMovimentacao?: string;
}

interface crateMovimentacaoDTO {
  id_categoria: number;
  descricao: string;
  valor: number;
  tipo: Tipo;
  data: Date;
}

export { IMovimentacaoRepository, crateMovimentacaoDTO, IMovimentacaoQueryParams };
