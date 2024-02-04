import { Movimentacoes, Tipo } from "@prisma/client";

interface IMovimentacaoRepository {
  create(movimentacaoDTO: crateMovimentacaoDTO): Promise<Movimentacoes>;
  list(): Promise<Movimentacoes[]>;
}

interface crateMovimentacaoDTO {
  id_categoria: number;
  descricao: string;
  valor: number;
  tipo: Tipo;
  data: Date;
}

export { IMovimentacaoRepository, crateMovimentacaoDTO };
