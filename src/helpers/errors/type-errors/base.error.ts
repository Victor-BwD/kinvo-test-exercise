import { Response } from "express";

class BaseError extends Error {
  message: string;
  status: number;

  constructor(message = "Erro interno do servidor", status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendResponse(res: Response) {
    res.status(this.status).send({
      message: this.message,
      status: this.status
    });
  }
}

export default BaseError;
