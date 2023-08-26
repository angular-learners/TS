import { Animal } from "./Animal";

export class Lion extends Animal {
  sleep(): void {
    console.log("Lion sleeps");
  }

  eat(): void {
    console.log("Lion Eats");
  }
}
