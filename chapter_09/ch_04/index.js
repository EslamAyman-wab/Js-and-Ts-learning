function specialMix(...data) {
    let sum = 0;
    let foundNumber = false;
    for(let i = 0; i < data.length; i++){
        if(typeof (data[i]) === "number"){
           sum+=data[i];
           foundNumber = true;
        }
        else if(!isNaN(parseInt(data[i]))){
            sum+=parseInt(data[i]);
            foundNumber = true;
        }
    }
    if (!foundNumber) {
        return `All Is Strings`;
    }
    return sum;

}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings