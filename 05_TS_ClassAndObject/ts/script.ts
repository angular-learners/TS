console.log("Classes in Ts");

class Bus {
  busNo: string;
  source: string;
  destination: string;
  type: string;

  dropTime() {
    console.log("12:00 AM");
  }

  pickupTime() {
    console.log("11:00 PM");
  }
}

// let age=10;
let age: number = 10;

let bus: Bus = new Bus();

let { busNo, source, destination, type } = bus;

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

let bus2: Bus = new Bus();

bus2.busNo = "12A";
bus2.source = "SEC";
bus2.destination = "KNR";
bus2.type = "DELEX";
bus2.dropTime();
bus2.pickupTime();

console.log(bus2, busNo);
