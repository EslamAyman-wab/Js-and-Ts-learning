let num = "12345678";

let result = num.replace(/\d{4}(?=\d)/g, "$&-");

console.log(result);