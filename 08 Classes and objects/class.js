// class is  a blueprint for creating objects. It defines a set of properties and methods that the objects created from the class will have.

class Person {
    // constructor is a default special method that is called when an object is created from the class. It is used to initialize the properties of the object.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // user-defined method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// example 02
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    displayInfo() {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');
car1.displayInfo(); // Output: This car is a Toyota Camry.
car2.displayInfo(); // Output: This car is a Honda Civic.