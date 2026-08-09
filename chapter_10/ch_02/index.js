let myString = "EElllzzzzzzzeroo";

let namefil = myString.split("");
let filter = namefil.filter(function (ele,index,array){
return namefil.indexOf(ele) == index;
}).join("")
console.log(filter)
// Elzero