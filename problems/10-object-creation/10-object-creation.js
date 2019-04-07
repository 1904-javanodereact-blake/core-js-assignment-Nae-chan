/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//An object created with object literal notation
let objectOne = {
    name: 'Blake',
    age: 25
}
console.log('Object from Object Literal ', objectOne)

//An object created with constructor function
function ObjectFromFunction(name, age) {
    this.name = name;
    this.age = age;
}
let objectTwo = new ObjectFromFunction('Danae', 24);
console.log('Object from function', objectTwo);

//An object created with es6 class
class ObjectFromClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let objectThree = new ObjectFromClass('Rick', 21);
console.log('Object from Class', objectThree);