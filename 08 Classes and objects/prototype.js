const person = {
    name: 'John',
    marks: 90,
    printMarks() {
        console.log(this.marks);
    }
};
person.printMarks(); // Output: 90


// The printMarks method can be accessed because it is defined on the person object and can access the marks property using this.marks. 

//" this "refers to the current object (person) and allows us to access its properties and methods.

// Prototype is object which is inbuilt when we create an object in JavaScript. It is has some properties and methods to an object. for example, toString() method is a prototype method which is used to convert an object into string.

const array = [1, 2, 3];
console.log(array.toString()); // Output: 1,2,3
array.push(4);
array.pop();

// here we dont have to define toString() method because it is already defined in the prototype of array. We can access it using array.toString() and it will convert the array into string.

// however, we can also add our own methods to the prototype of an object. For example, we can add a method to the Array prototype to calculate the sum of all elements in the array:
Array.prototype.sum = function() {
    return this.reduce((acc, val) => acc + val, 0);
};
console.log(array.sum()); // Output: 10


// using __proto_ for accessing function from another object
const person1 = {
    name: 'Alice',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person2 = {
    name: 'Bob'
};
person2.__proto__ = person1; // Set person1 as the prototype of person2
person2.greet(); // Output: Hello, my name is Bob
// In this example, we set person1 as the prototype of person2 using __proto__. This allows person2 to access the greet method defined in person1, and when we call person2.greet(), it uses the greet method from person1 and outputs "Hello, my name is Bob".

// if oject and prototype have same property then it will give preference to object property. for example:
const person3 = {
    name: 'Charlie',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person4 = {
    name: 'Dave',
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person4.__proto__ = person3; // Set person3 as the prototype of person4
person4.greet(); // Output: Hi, I'm Dave
// In this example, both person3 and person4 have a greet method. However, when we call person4.greet(), it uses the greet method defined in person4 instead of the one in person3 because it gives preference to the object's own properties and methods over those inherited from the prototype.
