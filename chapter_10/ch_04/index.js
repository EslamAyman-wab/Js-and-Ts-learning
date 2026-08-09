let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let namefilter = numsAndStrings.filter(function (ele) {
    if(typeof (ele) == "string"){
        return false;
    } else if (typeof(ele) === "number"){
    return true;
    }
}).map(function (ele){
   return  ele *-1;
})
console.log(namefilter)

// [-1, -10, 10, 20, -5, -3]