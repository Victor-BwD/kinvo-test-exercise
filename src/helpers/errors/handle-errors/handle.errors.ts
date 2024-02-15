import { HttpStatus } from "../../../infra/http/http.status";
import { Response } from "express";
import NotFound from "../type-errors/not.found.error";
import BadRequest from "../type-errors/bad.request.error";

async function handleError(error: Error, res: Response) {
  if (error instanceof NotFound) {
    return res.status(HttpStatus.NOT_FOUND).send({ message: error.message });
  } else if (error instanceof BadRequest) {
    return res.status(HttpStatus.BAD_REQUEST).send({ message: error.message });
  }

  return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message });
}

export default handleError;
