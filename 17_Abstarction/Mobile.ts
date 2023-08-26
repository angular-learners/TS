import { Product } from "./Product";

class Mobile extends Product {
  constructor(productName: string, productPrice: number) {
    super(productName, productPrice);
  }

  getDescription() {
    console.log(`${this.productName} , ${this.productPrice}`);
  }
}

const mobile: Mobile = new Mobile("OPPO", 12000);

mobile.getDescription();
mobile.getMessage();
