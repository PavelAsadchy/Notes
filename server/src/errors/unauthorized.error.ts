import { CLIENT_ERROR } from "./client.error";
import * as StatusCodes from '../utils/statusCodes';

export class UNAUTHORIZED_ERROR extends CLIENT_ERROR {
  status: number;
  constructor(message: string) {
    super(`Unauthorized. ${message}`);
    this.status = StatusCodes.FORBIDDEN;
  }
}
