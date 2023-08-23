import { Person } from "./Person";

export class PersonService {
  personArr: Person[] = [];

  constructor() {}

  addPerson(persons: Person[]): Person[] {
    persons.forEach((person: Person) => {
      this.personArr.push(person);
    });
    console.log("Person Added Successfully");
    return this.personArr;
  }

  deletePerson(id: number): void {
    if (id) {
      this.personArr.splice(id, 1);
      console.log("Person Deleted Succesfully");
    }
  }

  getAllPersons(): void {
    this.personArr.forEach((person: Person) => {
      console.log(person);
    });
  }
}
