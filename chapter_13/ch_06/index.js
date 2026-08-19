let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let copy = chars.copyWithin(5,0,3);

copy.copyWithin(6,3,5)

console.log(copy)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']