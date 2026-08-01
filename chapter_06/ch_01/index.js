let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(myFriends.length-true),true
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
