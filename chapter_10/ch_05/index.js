let nums = [2, 12, 11, 5, 10, 1, 99];

let sum = nums.reduce(function (acc , current){
    if(current %2 == 0 ){
     return   acc * current;
    }else if (current %2 !=0) {
      return  acc + current;
    }
}, 1)
console.log(sum)
// 500