let Birthed1 = new Date("07/23/2002");
console.log(Birthed1.toString())

//
let Birthed2= new Date(2002,6,23);
console.log(Birthed2.toString())

//
let date = Date.parse("07/23/2002");
let Birthed3 = new Date(date);
console.log(Birthed3.toString())
