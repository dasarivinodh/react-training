// class weill not have access modifier but the mmenbers can have and default value is public
class Vehicle {
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    // constructor over loading is ot allowed but we can define multiple but will have only one definition
    incrementSpeed(value) {
        this.speed += value;
    }
}
let car = new Vehicle();
car.name = "Ferrari";
car.speed = 250;
car.gears = 6;
console.log("My car", car);
car.incrementSpeed(50);
console.log("My car", car);
let car1 = new Vehicle("audi");
console.log("My car", car1);
let car2 = new Vehicle("audi2", 450, 6);
console.log("My car", car2);
// function are first class types
// function statment wil have implicit orgs> this and argumnets
//global object in wbrowser is window
// arrow functions wil not recevie implicit orgs
