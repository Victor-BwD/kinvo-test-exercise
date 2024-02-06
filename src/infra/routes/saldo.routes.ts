import { Router } from "express";
import { SaldoController } from "../../controllers/saldo.controller";
import { saldoUrls } from "../../config/constants/urls";
import { HttpStatus } from "../http/http.status";
import handleError from "../../helpers/errors/handle-errors/handle.errors";

const saldoRoutes = Router();

const controller = new SaldoController();

saldoRoutes.post(saldoUrls.url, async (req, res) => {
  try {
    const deposito = await controller.create(req.body);

    return res.status(HttpStatus.CREATED).json(deposito);
  } catch (error: unknown) {
    handleError(error as Error, res);
  }
});

saldoRoutes.get(saldoUrls.url, async (req, res) => {
  try {
    const saldo = await controller.list();

    return res.status(HttpStatus.OK).json(saldo);
  } catch (error: unknown) {
    handleError(error as Error, res);
  }
});

saldoRoutes.put(saldoUrls.url, async (req, res) => {
  try {
    const saldo = await controller.update(req.body);

    return res.status(HttpStatus.OK).json(saldo);
  } catch (error: unknown) {
    handleError(error as Error, res);
  }
});

export { saldoRoutes };
