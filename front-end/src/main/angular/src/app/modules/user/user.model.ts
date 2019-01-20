export class User {
  id: string;
  name: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  group: UserGroup = null;

  newPassword: string = "";
  passwordConfirmation: string = "";

  static EMPTY = new User();
}

export class UserGroup {
  id: number = 0;
  key: string = "";
  name: string = "";
}
