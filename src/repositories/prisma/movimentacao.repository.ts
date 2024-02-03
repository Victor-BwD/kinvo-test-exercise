import { BasePrismaRepository } from "./base.prisma.repository";
import { IMovimentacaoRepository, crateMovimentacaoDTO } from "./interfaces/movimentacao.repository.type";

class MovimentacaoRepository extends BasePrismaRepository implements IMovimentacaoRepository {
  async create(movimentacaoDTO: crateMovimentacaoDTO) {
    const movimentacao = await this.prisma.movimentacoes.create({
      data: {
        id_categoria: movimentacaoDTO.id_categoria,
        descricao: movimentacaoDTO.descricao,
        valor: movimentacaoDTO.valor,
        data: movimentacaoDTO.data
      }
    });

    return movimentacao;
  }
}

export { MovimentacaoRepository };
