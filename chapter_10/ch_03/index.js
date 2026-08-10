let myArray = ["E", "l", "z", ["e", "r"], "o"];

let name = myArray.reduce(function (acc,current){
   if(Array.isArray(current)){
       return acc+  current.join("")
   }
   return  acc + current
},"")

console.log(name)
// Elzero