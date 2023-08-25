import { Customer } from "./Customer";

class Seller extends Customer {
  sellerNumber: number;
}

const seller: Seller = new Seller(
  1,
  123,
  "John",
  "Kumar",
  "johnkumar@gmail.com",
  999919991
);
seller.sellerNumber = 123;
console.log(seller.sellerNumber);
seller.viewProfile();
seller.login();
