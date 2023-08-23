"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMain = void 0;
var PersonService_1 = require("./PersonService");
var Person_1 = require("./Person");
var PersonMain = /** @class */ (function () {
    function PersonMain() {
        this.personService = new PersonService_1.PersonService();
        this.person = new Person_1.Person(1, "Kumar", "Sai", "sai@gmail.com", "A123");
        this.person2 = new Person_1.Person(2, "raj", "Sai", "sai@gmail.com", "A123");
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
    return PersonMain;
}());
exports.PersonMain = PersonMain;
var personMain = new PersonMain();
