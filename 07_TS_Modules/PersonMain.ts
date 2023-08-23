import { PersonService } from "./PersonService";
import { Person } from "./Person";

export class PersonMain {
  personService: PersonService = new PersonService();
  person: Person = new Person(1, "Kumar", "Sai", "sai@gmail.com", "A123");
  person2: Person = new Person(2, "raj", "Sai", "sai@gmail.com", "A123");

  addedPersons: Person[];
  constructor() {
    //  const persons=[...this.person,this.person2];
    this.addedPersons = this.personService.addPerson([
      this.person,
      this.person2,
    ]);
    console.log(this.addedPersons);
    console.log("Hello World");
    this.personService.deletePerson(1);
    this.personService.getAllPersons();
  }
}

let personMain = new PersonMain();
