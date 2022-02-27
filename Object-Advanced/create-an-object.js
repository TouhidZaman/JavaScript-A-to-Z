//1. using object literal
const myObject = { name: "Touhid", email: "touhid4bd@gmail.com" }
console.log(myObject);

//2. using create method
const myObject2 = new Object();
console.log(myObject2);

//3. using create method
// let myObject2 = Object.create(null);
//Object pass korle tar property gula inherit korte parbe
const myObject3 = Object.create(myObject); 
console.log(myObject3);
console.log(myObject3.name);

//4. using class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const myObject4 = new People("Touhid", 25);
console.log(myObject4);

//4. OLD style using functions (Before ES6)
function Manus(name) {
    this.name = name; 
}
const myObject5 = new Manus("Topu");
console.log(myObject5);