import express, { type Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { movimentacaoRouter } from "../routes/movimentacao.routes";
import { saldoRoutes } from "../routes/saldo.routes";

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.json());
  }

  initRoutes() {
    this.server.use(movimentacaoRouter);
    this.server.use(saldoRoutes);
  }
}

export default new App().server;
