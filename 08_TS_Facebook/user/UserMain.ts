import { User } from "./User";
import { UserService } from "./UserService";

class UserMain {
  /** Create Account */
  userService: UserService = new UserService();
  user: User = new User(
    1,
    "sai",
    "Kumar",
    "Sai123",
    "sai@gmail.com",
    9900990099
  );
  constructor() {
    let myUser = this.userService.createAccount(this.user);
    console.log(myUser);

    // let user = this.userService.myProfile();
    // console.log(user);
    let loginRes = this.userService.login("sai@gmail.com", "ai123");
    console.log(loginRes);

    // let deleteRes = this.userService.deleteAccount(1);
    // console.log(deleteRes);
  }
}

new UserMain();
