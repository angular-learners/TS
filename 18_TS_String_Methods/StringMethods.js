var str = "am Learning java script";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
var myName = "Raj Kumar";
var splitMyName = myName.split(" ");
console.log(splitMyName);
var names = "raj,kumar,sai,naveen,ram,kiran";
var splitByComma = names.split(",");
console.log(splitByComma);
// let lastName = "sai";
// let startWith = lastName.startsWith("i");
// let endsWith = lastName.endsWith("i");
// console.log(startWith);
// console.log(endsWith);
var mobileName = "Samsung";
var substringEx = mobileName.substring(2, 3);
console.log(substringEx);
// let carName = "Toyoto";
// let myCar = carName.includes("k");
// console.log(myCar);
var bikeName = "Royal";
console.log(bikeName.charAt(0));
var firstName = "sai";
var lastName = "kumar";
console.log(firstName.concat(lastName));
var produtName = "Trouser                                     ";
console.log(produtName.trim());
var email = "rajkumar  ";
if (email.trim() == "rajkumar") {
    console.log("Email is Raj");
}
else {
    console.log("  Not Raj");
}
var companyName = "Infosys;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
var myCompany = companyName.replace(";", " ");
var myStr = "";
for (var i = 0; i < companyName.length; i++) {
    if (companyName.charAt(i) != ";") {
        myStr = myStr + companyName.charAt(i);
    }
}
console.log(myStr);
var companyAddress = "Hitech City";
console.log(companyAddress.indexOf("k"));
