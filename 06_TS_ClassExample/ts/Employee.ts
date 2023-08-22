class Employee {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: number;

  //   constructor() {
  //     console.log("Default Constructor");
  //   }

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mobileNumber: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.mobileNumber = mobileNumber;
  }

  displayFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

let emp: Employee = new Employee(
  "Raj",
  "Kumar",
  "rk@gmail.com",
  "RAJ",
  99099999
);

console.log(emp.displayFullName());
