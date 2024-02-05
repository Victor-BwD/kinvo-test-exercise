import { Router } from "express";
import { SaldoController } from "../../controllers/saldo.controller";

const saldoRoutes = Router();

const controller = new SaldoController();

saldoRoutes.post("/saldo", async (req, res) => {
  try {
    const deposito = await controller.create(req.body);

    return res.status(201).json(deposito);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

saldoRoutes.get("/saldo", async (req, res) => {
  try {
    const saldo = await controller.list();

    return res.status(200).json(saldo);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

export { saldoRoutes };
