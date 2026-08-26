let phone = "+(995)-123 (4567)";

let regPhone = /\+\(\d{3}\)-\d{3} \(\d{4}\)/
console.log(phone.match(regPhone))