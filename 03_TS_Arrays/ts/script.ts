let numbers: number[] = [10, 30, 30, 50, 6, 4, 3];

// let uniqueNumbers:number[]=Array.from(new Set(numbers));

let mySet = new Set([...numbers]);

let uniqueNumbers: number[] = Array.from(mySet);
console.log(uniqueNumbers);

uniqueNumbers.sort((a, b) => a - b);
console.log(uniqueNumbers);

//npm install -D @types/node   (Only you get Error)
