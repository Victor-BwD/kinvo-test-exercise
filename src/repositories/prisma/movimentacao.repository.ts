import { BasePrismaRepository } from "./base.prisma.repository";
import {
  IMovimentacaoQueryParams,
  IMovimentacaoRepository,
  crateMovimentacaoDTO
} from "./interfaces/movimentacao.repository.type";

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

  async list(dataMovimentacao: IMovimentacaoQueryParams, page: number, pageSize: number) {
    const skipCount = (page - 1) * pageSize;

    return await this.prisma.movimentacoes.findMany({
      where: {
        data: dataMovimentacao.dataMovimentacao ? new Date(dataMovimentacao.dataMovimentacao) : undefined
      },
      skip: skipCount,
      take: pageSize
    });
  }

  async update(id: number, movimentacaoDTO: crateMovimentacaoDTO) {
    const movimentacaoAntiga = await this.prisma.movimentacoes.findUnique({
      where: { id }
    });

    if (!movimentacaoAntiga) {
      throw new Error("Movimentação não encontrada");
    }

    const diferencaValor = movimentacaoDTO.valor - movimentacaoAntiga.valor;

    const movimentacao = await this.prisma.movimentacoes.update({
      where: { id },
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
          increment: movimentacaoDTO.tipo === "saida" ? -diferencaValor : diferencaValor
        }
      }
    });

    return movimentacao;
  }
}

export { MovimentacaoRepository };
