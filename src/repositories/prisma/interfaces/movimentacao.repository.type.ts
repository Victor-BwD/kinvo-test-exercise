import { Movimentacoes } from "@prisma/client";

interface IMovimentacaoRepository {
  create(movimentacaoDTO: crateMovimentacaoDTO): Promise<Movimentacoes>;
}

interface crateMovimentacaoDTO {
  id_categoria: number;
  descricao: string;
  valor: number;
  data: Date;
}

export { IMovimentacaoRepository, crateMovimentacaoDTO };
