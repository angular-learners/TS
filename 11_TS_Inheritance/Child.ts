import { Parent } from "./Parent";

class Child extends Parent {
  display() {
    console.log("Am Child");
  }
}

const child: Child = new Child();
child.getMoney(); //parent class method
child.getProperty(); //parent class method
child.display(); //child class method;
