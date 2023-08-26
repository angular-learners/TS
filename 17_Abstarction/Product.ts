export abstract class Product {
  productName: string;
  productPrice: number;

  constructor(productName: string, productPrice: number) {
    this.productName = productName;
    this.productPrice = productPrice;
  }

  abstract getDescription();

  getMessage() {
    console.log("My Message");
  }
}
