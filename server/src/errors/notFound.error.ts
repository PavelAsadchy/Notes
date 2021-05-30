import { CLIENT_ERROR } from './client.error';

export class NOT_FOUND_ERROR extends CLIENT_ERROR {
  status: number;
  constructor(message: string) {
    super(`Bad Request. ${message}`);
    this.status = 404;
  }
};