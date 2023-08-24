import { User } from "./User";
import { FacebookConstants } from "../constants/FacebookConstants";
export class UserService {
  //  fbCon=new FacebookConstants();
  userArr: User[] = [];

  createAccount(user: User): User {
    this.userArr.push(user);
    return this.userArr[0];
  }

  login(email: string, password: string): string {
    let loginResponse = "";
    this.userArr.forEach((user: User) => {
      if (email == user.email && password == user.password) {
        loginResponse = FacebookConstants.LOGIN_SUCCESS;
      } else {
        loginResponse = FacebookConstants.LOGIN_FAILURE;
      }
    });
    return loginResponse;
  }

  deleteAccount(id: number): string {
    let deleteResponse = "";
    this.userArr.forEach((user: User) => {
      if (user.id == id) {
        this.userArr.splice(id, 1);
        deleteResponse = FacebookConstants.DEL_SUCCESS_RES;
      } else {
        deleteResponse = FacebookConstants.DEL_FAILURE_RES;
      }
    });
    return deleteResponse;
  }

  myProfile(): User {
    return this.userArr[0];
  }
}
