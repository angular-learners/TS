var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [10, 30, 30, 50, 6, 4, 3];
// let uniqueNumbers:number[]=Array.from(new Set(numbers));
var mySet = new Set(__spreadArray([], numbers, true));
var uniqueNumbers = Array.from(mySet);
console.log(uniqueNumbers);
uniqueNumbers.sort(function (a, b) { return a - b; });
console.log(uniqueNumbers);
