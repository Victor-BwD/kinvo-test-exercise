import { isEmpty } from "radash";
import { crateMovimentacaoDTO } from "../repositories/prisma/interfaces/movimentacao.repository.type";

export function isValidMovimentacaoDTO(movimentacaoDTO: crateMovimentacaoDTO): boolean {
  // Implemente a lógica de validação de acordo com seus requisitos
  return movimentacaoDTO.valor > 0 && !isEmpty(movimentacaoDTO.tipo);
}
