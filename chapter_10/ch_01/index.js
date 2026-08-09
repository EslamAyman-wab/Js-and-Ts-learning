let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let name = mix.map(function (ele){
    return isNaN(parseInt(ele)) ? ele : "";

})
console.log(name)
// Elzero