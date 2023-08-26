import { Lion } from "./Lion";
import { Tiger } from "./Tiger";
class Main {
  lion: Lion = new Lion();
  tiger: Tiger = new Tiger();

  constructor() {
    this.lion.eat();
    this.lion.sleep();
    this.tiger.eat();
    this.tiger.sleep();
  }
}

new Main();
