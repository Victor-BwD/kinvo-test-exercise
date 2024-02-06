import { Router } from "express";
import { SaldoController } from "../../controllers/saldo.controller";
import { saldoUrls } from "../../config/constants/urls";

const saldoRoutes = Router();

const controller = new SaldoController();

saldoRoutes.post(saldoUrls.url, async (req, res) => {
  try {
    const deposito = await controller.create(req.body);

    return res.status(201).json(deposito);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

saldoRoutes.get(saldoUrls.url, async (req, res) => {
  try {
    const saldo = await controller.list();

    return res.status(200).json(saldo);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

saldoRoutes.put(saldoUrls.url, async (req, res) => {
  try {
    const saldo = await controller.update(req.body);

    return res.status(200).json(saldo);
  } catch (error: unknown) {
    return res.status(400).json(error as Error);
  }
});

export { saldoRoutes };
