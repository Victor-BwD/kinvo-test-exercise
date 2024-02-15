import { HttpStatus } from "../../../infra/http/http.status";
import BaseError from "./base.error";

class NotFound extends BaseError {
  constructor(message = "Página não encontrada") {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export default NotFound;
