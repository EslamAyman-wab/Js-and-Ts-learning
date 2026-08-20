let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let reg = /Os.O/g;
console.log(specialNames.match(reg))

// Output
// ['Os10O', 'OsO', 'Os100O']