import { Animal } from "./Animal";

export class Tiger extends Animal {
  sleep(): void {
    console.log("Tiger sleeps");
  }

  eat(): void {
    console.log("Tiger Eats");
  }
}
