import { Router } from "express";
import { MovimentacaoController } from "../../controllers/movimentacao.controller";

const movimentacaoRouter = Router();

const controller = new MovimentacaoController();

movimentacaoRouter.post("/movimentacao", async (req, res) => {
  try {
    const movimentacao = await controller.create(req.body);

    return res.status(201).json(movimentacao);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

movimentacaoRouter.get("/movimentacao", async (req, res) => {
  try {
    const movimentacao = await controller.list();

    return res.status(200).json(movimentacao);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

export { movimentacaoRouter };
