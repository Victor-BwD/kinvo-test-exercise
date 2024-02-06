import { HttpStatus } from "../../../infra/http/http.status";
import BaseError from "./base.error";

class BadRequest extends BaseError {
  constructor(message = "Um ou mais dados fornecidos estão incorretos") {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export default BadRequest;
