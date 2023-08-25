export class Customer {
  id: number;
  customerNumber: number;
  firstName: string;
  lastName: string;
  email: String;
  mobileNumber: number;

  constructor(
    id: number,
    customerNumber: number,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: number
  ) {
    this.id = id;
    this.customerNumber = customerNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobileNumber = mobileNumber;
  }

  login() {
    console.log("logged in successfully");
  }

  viewProfile() {
    console.log("View Profile");
  }
}
