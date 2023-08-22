var Employee = /** @class */ (function () {
    //   constructor() {
    //     console.log("Default Constructor");
    //   }
    function Employee(firstName, lastName, email, password, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
    }
    Employee.prototype.displayFullName = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    return Employee;
}());
var emp = new Employee("Raj", "Kumar", "rk@gmail.com", "RAJ", 99099999);
console.log(emp.displayFullName());
