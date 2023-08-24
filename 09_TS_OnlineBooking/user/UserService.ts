import { User } from "./User";

class UserService {
  userArr: User[] = [];
  user: User = new User();
  user2: User = new User();

  constructor() {
    this.setValues();
    this.getFullName();
  }

  setValues() {
    this.user.setFirstName = "sai";
    this.user.setLastName = "kumar";
    this.user.setEmail = "sai@gmail.com";
  }

  getFullName() {
    console.log(`${this.user.getFirstName} ${this.user.getlastName}`);
  }
}

new UserService();
