const person = {
    name: 'John',
    marks: 90,
    printMarks: function() {
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

// 
