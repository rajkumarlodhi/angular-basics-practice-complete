export class User {
  constructor(
    public email: string,
    public localId: string,
    public _token: string,
    public expirationDate: Date
  ) {}
  get token() {
    if (new Date() > this.expirationDate) {
      return null;
    }
    return this._token;
  }
}
