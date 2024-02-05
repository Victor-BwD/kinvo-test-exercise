import { Movimentacoes, Tipo } from "@prisma/client";

interface IMovimentacaoRepository {
  create(movimentacaoDTO: crateMovimentacaoDTO): Promise<Movimentacoes>;
  list(): Promise<Movimentacoes[]>;
  update(id: number, movimentacaoDTO: crateMovimentacaoDTO): Promise<Movimentacoes>;
}

interface crateMovimentacaoDTO {
  id_categoria: number;
  descricao: string;
  valor: number;
  tipo: Tipo;
  data: Date;
}

export { IMovimentacaoRepository, crateMovimentacaoDTO };
