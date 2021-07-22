import { CLIENT_ERROR } from "./client.error";
import * as StatusCodes from '../utils/statusCodes';

export class BAD_REQUEST_ERROR extends CLIENT_ERROR {
  status: number;
  constructor(message: string) {
    super(`Bad Request. ${message}`);
    this.status = StatusCodes.BAD_REQUEST;
  }
}
