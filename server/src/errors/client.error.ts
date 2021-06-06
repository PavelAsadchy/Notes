export class CLIENT_ERROR extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
