let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

let name1 = arr1.pop(); // X
let name2 = arr2.pop(); // Y
let name3 = arr2.pop(); // F
allArrs.push(name3);
allArrs.push(name1);
allArrs.push(name2);

console.log(allArrs); // ["F", "X", "Y"]
