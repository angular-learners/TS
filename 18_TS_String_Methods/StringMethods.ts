let str = "am Learning java script";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);

let myName = "Raj Kumar";

const splitMyName = myName.split(" ");
console.log(splitMyName);

let names = "raj,kumar,sai,naveen,ram,kiran";
const splitByComma = names.split(",");
console.log(splitByComma);

// let lastName = "sai";
// let startWith = lastName.startsWith("i");
// let endsWith = lastName.endsWith("i");
// console.log(startWith);
// console.log(endsWith);

let mobileName = "Samsung";

let substringEx = mobileName.substring(2, 3);

console.log(substringEx);

// let carName = "Toyoto";
// let myCar = carName.includes("k");
// console.log(myCar);

let bikeName = "Royal";

console.log(bikeName.charAt(0));

let firstName = "sai";
let lastName = "kumar";

console.log(firstName.concat(lastName));

let produtName = "Trouser                                     ";
console.log(produtName.trim());

let email = "rajkumar  ";

if (email.trim() == "rajkumar") {
  console.log("Email is Raj");
} else {
  console.log("  Not Raj");
}

let companyName = "Infosys;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";

let myCompany = companyName.replace(";", " ");

let myStr = "";
for (let i = 0; i < companyName.length; i++) {
  if (companyName.charAt(i) != ";") {
    myStr = myStr + companyName.charAt(i);
  }
}

console.log(myStr);

let companyAddress = "Hitech City";

console.log(companyAddress.indexOf("k"));
