console.log("Classes in Ts");
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.dropTime = function () {
        console.log("12:00 AM");
    };
    Bus.prototype.pickupTime = function () {
        console.log("11:00 PM");
    };
    return Bus;
}());
// let age=10;
var age = 10;
var bus = new Bus();
var busNo = bus.busNo, source = bus.source, destination = bus.destination, type = bus.type;
// bus.busNo = "123A";
// bus.source = "HYD";
// bus.destination = "KNR";
// bus.type = "EXPRESS";
busNo = "123A";
source = "HYD";
destination = "KNR";
type = "EXPRESS";
bus.dropTime();
bus.pickupTime();
var bus2 = new Bus();
bus2.busNo = "12A";
bus2.source = "SEC";
bus2.destination = "KNR";
bus2.type = "DELEX";
bus2.dropTime();
bus2.pickupTime();
console.log(bus2, busNo);
