export class Login {
  username: string;
  password: string;
  submit: string;

  constructor(data?: {}) {
    Object.assign(this, data);
  }
}
