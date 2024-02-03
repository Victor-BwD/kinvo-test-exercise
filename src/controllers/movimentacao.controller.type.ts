import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IMovimentacaoRepository } from "../repositories/prisma/interfaces/movimentacao.repository.type";
import { IMovimentacaoService } from "../services/movimentacao.service.type";

interface IMovimentacaoController {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  movimentacaoRepository: IMovimentacaoRepository;
  movimentacaoService: IMovimentacaoService;
}

export { IMovimentacaoController };
