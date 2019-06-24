// Story:	As a programmer, I can make a car. Hint:	Create a class called Car, and create a variable called myCar which contains an object of class Car

class Car{
    constructor(year){
        this.wheel = 4
        this.year = year
        this.isOn = false
        this.left = false
        this.right = false
        this.kmPh = 0
    }
    lights(){
        if (this.isOn != true){
            this.isOn = true
        } else {
            this.isOn = false
        }
        console.log("the lights are on: "+ this.isOn);
    }
    leftTurn(){
        if (this.left != true){
            this.left = true
        } else {
            this.left = false
        }
        console.log("Left turn signal:" + this.left);
    }
    rightTurn(){
        if (this.right != true){
            this.right = true
        } else {
            this.right = false
        }
        console.log("Right turn signal:" + this.right);
    }
    speed(){
        console.log(this.kmPh);
    }
    carInfo(){
        return "The speed is: " + this.kmPh +"\nThe left turn: " + this.left + "\nThe right turn: " + this.right +"\nThe lights: " + this.isOn + "\nHas " + this.wheel + " wheels" + "\nModel year: " + this.year
    }

}

let myCar = new Car()
console.log(myCar)
// Story:	As a programmer, I can tell how many wheels a car has; default is four.
//
// Story:	As a programmer, I can make a Tesla car. Hint:	Create an variable called myTesla which is of class Tesla which inherits from class Car.
class Tesla extends Car{
    constructor(year){
        super(year)
    }
    accelerate(){
        this.kmPh = this.kmPh + 10
    }
    decelerate(){
        this.kmPh = this.kmPh - 7
    }
}
let myTesla = new Tesla(2015)
let myTesla2 = new Tesla(2019)
console.log(myTesla);
console.log(myTesla2);

myTesla.accelerate()
myTesla.decelerate()
myTesla.carInfo()
console.log((myTesla.carInfo()));
console.log((myTesla2.carInfo()));
// Story:	As a programmer, I can make a Tata car.
class Tata extends Car{
    constructor(year){
        super(year)
    }
    accelerate(){
        this.kmPh = this.kmPh + 2
    }
    decelerate(){
        this.kmPh = this.kmPh - 1.25
    }
}
let myTata = new Tata(2010)
let myTata2 = new Tata(2011)
myTata.accelerate()
myTata.decelerate()
myTata.carInfo()
console.log((myTata.carInfo()));
console.log((myTata2.carInfo()));
// Story:	As a programmer, I can make a Toyota car.
class Toyota extends Car{
    constructor(year){
        super(year)
    }
    accelerate(){
        this.kmPh = this.kmPh + 7
    }
    decelerate(){
        this.kmPh = this.kmPh - 5
    }
}
let myToyota = new Toyota(2009)
let myToyota2 = new Toyota(2008)
myToyota.accelerate()
myToyota.decelerate()
myToyota.carInfo()
myToyota2.carInfo()
console.log((myToyota.carInfo()));
console.log((myToyota2.carInfo()));



// Story:	As a programmer, I can tell which model year a vehicle is from. Model years never change. Hint:	Make model year part of the initialization.
//
// Story:	As a programmer, I can turn on and off the lights on a given Car. Hint:	Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?
//
// Story:	As a programmer, I can determine if the lights are on or off. Lights start in the off position.
//
// Story: As a programmer, I can signal left and right. Turn signals starts off.
//



// Story:	As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.
//
// Story:	As a programmer, I can speed my Teslas up by 10 per acceleration.
//
// Story:	As a programmer, I can slow my Teslas down by 7 per braking.
//
// Story:	As a programmer, I can speed my Tatas up by 2 per acceleration.
//
// Story:	As a programmer, I can slow my Tatas down by 1.25 per braking.
//
// Story:	As a programmer, I can speed my Toyotas up by 7 per acceleration.
//
// Story:	As a programmer, I can slow my Toyotas down by 5 per braking.
//



// Story: As a programmer, I can call upon a car to tell me all it's information. Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.


//
// Story:	As a programmer, I can keep a collection of two of each kind of vehicle, all from different years. Hint:	Create two of each vehicles, all from different model years, and put them into an Array.
//


// Story:	As a programmer, I can sort my collection of cars based on model year.
//
// Story:	As a programmer, I can sort my collection of cars based on model. Hint:	Sort based on class name.
//
// Story:	As a programmer, I can sort my collection of cars based on model and then year.
//
