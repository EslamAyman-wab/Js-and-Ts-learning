let date = new Date();
let lastmonth = date.setDate(0)
console.log(date)

let month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(`Previous Month Is ${month[date.getMonth()]} And Last Day Is ${date.getDate()}`)
