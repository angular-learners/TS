export class User {
  firstName: string;
  lastName: string;
  email: string;

  // constructor(firstName: string, lastName: string, email: string) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  // }

  constructor() {}

  set setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  get getFirstName() {
    return this.firstName;
  }
  get getlastName() {
    return this.lastName;
  }

  get getEmail() {
    return this.email;
  }
}
