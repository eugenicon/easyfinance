export class User {
  id: string;
  name: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";

  newPassword: string = "";
  passwordConfirmation: string = "";

  static EMPTY = new User();
}
