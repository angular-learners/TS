var Genric = /** @class */ (function () {
    function Genric() {
        this.genric = [];
    }
    return Genric;
}());
var numbers = new Genric();
numbers.genric.push(10);
numbers.genric.push(20);
numbers.genric.push(30);
var colors = new Genric();
colors.genric.push("RED");
colors.genric.push("GREEN");
colors.genric.push("BLUE");
colors.genric.push("VIOLET");
numbers.genric.forEach(function (element) {
    console.log(element);
});
colors.genric.forEach(function (element) {
    console.log(element);
});
var Bus = /** @class */ (function () {
    function Bus(busName, busNo) {
        this.busName = busName;
        this.busNo = busNo;
    }
    return Bus;
}());
var bus = new Genric();
bus.genric.push(new Bus("ABC", 124));
bus.genric.push(new Bus("ABCD", 123));
bus.genric.push(new Bus("ABCE", 1243));
bus.genric.push(new Bus("ABCE", 1244));
bus.genric.forEach(function (ele) {
    console.log(ele.busName);
});
