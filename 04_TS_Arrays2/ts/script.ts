console.log("Array Examples");

function findCubes() {
  let numbers = [10, 5, 3];
  //      3       3        3
  //   10     , 5       ,3
  numbers.forEach((number) => {
    console.log(number * number * number);
  });
}

//findCubes();

function findCubesUsingMap() {
  let numbers: number[] = [10, 5, 3, 4];
  let cubes = numbers.map((number) => number * number * number);
  console.log(cubes);
}

//findCubesUsingMap();

function findSum() {
  let numbers: number[] = [10, 5, 3, 4];
  let sum: number = numbers.reduce((acc: number, curr: number = 0): any => {
    return acc + curr;
  });
  console.log(sum);
  //  accumulator ,current           previousValue,currentValue
}
//findSum();

function findMax() {
  let numbers: number[] = [5, 10, 3, 4, 98];
  let max: number = numbers.reduce((acc: number, curr: number = 0): any => {
    return curr > acc ? curr : acc;
  });
  console.log(`Maximum Numbers: ${max}`);
  //  accumulator ,current           previousValue,currentValue
}
findMax();

//   sum=0;

//     sum=sum+arry[i];
