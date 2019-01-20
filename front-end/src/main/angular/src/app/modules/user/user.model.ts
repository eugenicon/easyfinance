export class User {
  id: string;
  name: string = "";
  password: string = "";
  fullName: string = "";
}

export class RegisterUser extends User{
  passwordConfirmation: string = "";
}
