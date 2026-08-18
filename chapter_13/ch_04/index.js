let theNumber = 100020003000;


console.log([...new Set(String(theNumber))].filter(Number).join())
// Needed Output
// 123