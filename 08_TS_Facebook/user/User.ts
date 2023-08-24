export class User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  mobileNumber: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    mobileNumber: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.mobileNumber = mobileNumber;
  }
}
