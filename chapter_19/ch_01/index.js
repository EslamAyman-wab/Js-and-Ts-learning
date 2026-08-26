// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    info(){
        return`Car One Name Is ${this.n} And Model is ${this.m} And Price Is ${this.p}`
    }
    run(){
        return`Car Is Running Now`
    }
}
let carOne = new Car("MG",2022,420000)

console.log(carOne.info())
console.log(carOne.run())

// Needed Output


// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"