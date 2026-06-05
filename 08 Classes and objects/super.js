// super is a keyword used to call the constructor of the parent class and to access its properties and methods. It is commonly used in class inheritance to ensure that the child class can properly initialize the properties inherited from the parent class.

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
    constructor(name, breed) {
        super(name); // calling the constructor of the parent class (Animal) to initialize the name property
        this.breed = breed; // initializing the breed property specific to Dog class
    }
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const dog1 = new Dog('Buddy', 'Labrador');
dog1.eat(); // Output: Buddy is eating.
dog1.bark(); // Output: Buddy is barking.
// In this example, the Dog class extends the Animal class. The constructor of the Dog class uses the super keyword to call the constructor of the Animal class, passing the name argument to initialize the name property. This allows the Dog class to inherit and use the eat method from the Animal class while also having its own properties and methods.