// inheritance is a fundamental concept in object-oriented programming that allows a new class (called a subclass or child class) to inherit properties and behaviors (methods) from an existing class (called a superclass or parent class). This promotes code reusability and establishes a natural hierarchical relationship between classes.

// example 01   
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Dog class inherits from Animal class
class Dog extends Animal {
    constructor( breed) {
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog1 = new Dog('Labrador');
dog1.eat(); // Output: Labrador is eating.
dog1.bark(); // Output: Labrador is barking.
// In this example, the Dog class extends the Animal class, which means it inherits the properties and methods of the Animal class. The Dog class can use the eat method defined in the Animal class, and it also has its own method bark.

// note: if child  and parent class have same method then child class method will override the parent class method. This is called method overriding. 