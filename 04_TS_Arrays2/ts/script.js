console.log("Array Examples");
function findCubes() {
    var numbers = [10, 5, 3];
    //      3       3        3
    //   10     , 5       ,3
    numbers.forEach(function (number) {
        console.log(number * number * number);
    });
}
//findCubes();
function findCubesUsingMap() {
    var numbers = [10, 5, 3, 4];
    var cubes = numbers.map(function (number) { return number * number * number; });
    console.log(cubes);
}
//findCubesUsingMap();
function findSum() {
    var numbers = [10, 5, 3, 4];
    var sum = numbers.reduce(function (acc, curr) {
        if (curr === void 0) { curr = 0; }
        return acc + curr;
    });
    console.log(sum);
    //  accumulator ,current           previousValue,currentValue
}
//findSum();
function findMax() {
    var numbers = [5, 10, 3, 4, 98];
    var max = numbers.reduce(function (acc, curr) {
        if (curr === void 0) { curr = 0; }
        return curr > acc ? curr : acc;
    });
    console.log("Maximum Numbers: ".concat(max));
    //  accumulator ,current           previousValue,currentValue
}
findMax();
//   sum=0;
//     sum=sum+arry[i];
