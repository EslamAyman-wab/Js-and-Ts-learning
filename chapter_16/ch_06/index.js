let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let personObject = myFriends[chosen - 1];
let { title, age, available, skills: [, c] } = personObject;

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(c);
//
// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2
//
// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3
//
// "Sayed"
// 33
// "Available"
// "Laravel"