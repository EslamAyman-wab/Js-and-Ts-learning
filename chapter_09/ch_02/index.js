// function itsMe() {
//     return `I am A Normal Function`;
// }
//
// console.log(itsMe()); // I am A Normal Function
let  itsMe= ()=>  `I am A Normal Function`;
console.log(itsMe())
//
// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }
//
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlCreate=(protocol , web , tld)=>`${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https","eslam","com"))