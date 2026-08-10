// Method One
// Create Your Object Here
let objMethodOne = {
    property : "this is Methode_One",
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object() ;
    objMethodTwo.property = "this is Methode_Two"
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
function objMethodThree(){
    this.property = "this is Method Three";
}

let objThree = new objMethodThree(); // هنا بس بيتكوّن الـ Object
console.log(objThree.property);

// console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = Object.create({});

objMethodFour.property = "this is Methode_four";

console.log(objMethodFour.property); // "Method Four"