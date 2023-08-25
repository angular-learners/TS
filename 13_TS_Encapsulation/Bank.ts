export class Bank {
  private customerName: string;
  private customerNumber: number;
  private amount: number;
  private location: string;

  set setCustomerName(customerName: string) {
    this.customerName = customerName;
  }
  set setCustomerNumber(customerNumber: number) {
    this.customerNumber = customerNumber;
  }
  set setAmount(amount: number) {
    this.amount = amount;
  }
  set setLocation(location: string) {
    this.location = location;
  }

  get getCustomerName() {
    return this.customerName;
  }
  get getCustomerNumber() {
    return this.customerNumber;
  }
  get getAmount() {
    return this.amount;
  }
  get setLocation() {
    return this.location;
  }

  checkBalance() {
    console.log("Your Balance:" + this.getAmount);
  }

  depositAmount(amount: number) {
    this.amount = this.amount + amount;
    console.log("Your Amount Deposited Sucessfully");
  }

  withDrawAmount(amount: number) {
    this.amount = this.amount - amount;
    console.log("Your Amount withdrawn Sucessfully");
  }

  changePin() {
    console.log("Your Pin Changed  Sucessfully");
  }
}

const bank: Bank = new Bank();
bank.setAmount = 1000;
bank.setCustomerName = "Kumar";
bank.setLocation = "HYD";
bank.setCustomerNumber = 12002000100;
bank.checkBalance();
bank.depositAmount(2000);
bank.checkBalance();
bank.withDrawAmount(1500);
bank.checkBalance();
