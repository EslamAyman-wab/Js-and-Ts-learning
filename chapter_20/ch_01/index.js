let datnow = new Date()
let berthday = new Date("07 / 23/ 2002");

let daydiff = datnow - berthday;

const sec = daydiff / 1000;
const min = sec / 60;
const hours = min / 60;
const days = hours / 24;
const weeks = days / 7;
const months = days / 30;      // divide days by 30, not weeks by 30
const years = days / 365;      // divide days by 365, not months by 12

console.log(`Date in sec: ${sec}`);
console.log(`Date in min: ${min}`);
console.log(`Date in h: ${hours}`);
console.log(`Date in day: ${days}`);
console.log(`Date in weeks: ${weeks}`);
console.log(`Date in month: ${months}`);
console.log(`Date in years: ${years}`);