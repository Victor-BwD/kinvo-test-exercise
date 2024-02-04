import { BasePrismaRepository } from "./base.prisma.repository";
import { IMovimentacaoRepository, crateMovimentacaoDTO } from "./interfaces/movimentacao.repository.type";

class MovimentacaoRepository extends BasePrismaRepository implements IMovimentacaoRepository {
  async create(movimentacaoDTO: crateMovimentacaoDTO) {
    const movimentacao = await this.prisma.movimentacoes.create({
      data: {
        id_categoria: movimentacaoDTO.id_categoria,
        descricao: movimentacaoDTO.descricao,
        valor: movimentacaoDTO.valor,
        tipo: movimentacaoDTO.tipo,
        data: movimentacaoDTO.data
      }
    });

    await this.prisma.saldo.update({
      where: { id: 1 },
      data: {
        valor: {
          increment: movimentacaoDTO.tipo === "saida" ? -movimentacaoDTO.valor : movimentacaoDTO.valor
        }
      }
    });

    return movimentacao;
  }

  async list() {
    return await this.prisma.movimentacoes.findMany();
  }
}

export { MovimentacaoRepository };
