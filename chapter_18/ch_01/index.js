let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regip = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
console.log(ip.match(regip))