class Genric<T> {
  genric: T[] = [];
}

const numbers = new Genric<number>();
numbers.genric.push(10);
numbers.genric.push(20);
numbers.genric.push(30);

const colors = new Genric<string>();
colors.genric.push("RED");
colors.genric.push("GREEN");
colors.genric.push("BLUE");
colors.genric.push("VIOLET");

numbers.genric.forEach((element) => {
  console.log(element);
});

colors.genric.forEach((element) => {
  console.log(element);
});

class Bus {
  busName: string;
  busNo: number;

  constructor(busName: string, busNo: number) {
    this.busName = busName;
    this.busNo = busNo;
  }
}

const bus = new Genric<Bus>();
bus.genric.push(new Bus("ABC", 124));
bus.genric.push(new Bus("ABCD", 123));
bus.genric.push(new Bus("ABCE", 1243));
bus.genric.push(new Bus("ABCE", 1244));

bus.genric.forEach((ele) => {
  console.log(ele.busName);
});
