"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
var PersonService = /** @class */ (function () {
    function PersonService() {
        this.personArr = [];
    }
    PersonService.prototype.addPerson = function (persons) {
        var _this = this;
        persons.forEach(function (person) {
            _this.personArr.push(person);
        });
        console.log("Person Added Successfully");
        return this.personArr;
    };
    PersonService.prototype.deletePerson = function (id) {
        if (id) {
            this.personArr.splice(id, 1);
            console.log("Person Deleted Succesfully");
        }
    };
    PersonService.prototype.getAllPersons = function () {
        this.personArr.forEach(function (person) {
            console.log(person);
        });
    };
    return PersonService;
}());
exports.PersonService = PersonService;
