import { Router } from "express";
import { MovimentacaoController } from "../../controllers/movimentacao.controller";
import { movimentacaoUrls } from "../../config/constants/urls";
import { HttpStatus } from "../http/http.status";
import handleError from "../../helpers/errors/handle-errors/handle.errors";

const movimentacaoRouter = Router();

const controller = new MovimentacaoController();

movimentacaoRouter.post(movimentacaoUrls.url, async (req, res) => {
  try {
    const movimentacao = await controller.create(req.body);

    return res.status(HttpStatus.CREATED).json(movimentacao);
  } catch (error: unknown) {
    handleError(error as Error, res);
  }
});

movimentacaoRouter.get(movimentacaoUrls.url, async (req, res) => {
  try {
    const dataMovimentacao = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const movimentacao = await controller.list(dataMovimentacao, page, pageSize);

    return res.status(HttpStatus.OK).json(movimentacao);
  } catch (error: unknown) {
    handleError(error as Error, res);
  }
});

movimentacaoRouter.put(movimentacaoUrls.urlId, async (req, res) => {
  try {
    const movimentacao = await controller.update(Number(req.params.id), req.body);

    return res.status(HttpStatus.OK).json(movimentacao);
  } catch (error: unknown) {
    handleError(error as Error, res);
  }
});

export { movimentacaoRouter };
