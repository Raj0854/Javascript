// Data types in JavaScript

// 1. Primitive Data Types
// a. String: used to represent textual data
let name = "John Doe";
console.log(name);
// b. Number: used to represent numeric values
let age = 30;
console.log(age);
// c. Boolean: used to represent true or false values
let isStudent = true;
console.log(isStudent);
// d. Null: used to represent the absence of any value
let emptyValue = null;
console.log(emptyValue);
// e. Undefined: used to represent a variable that has been declared but not assigned a value
let unassignedVariable;
console.log(unassignedVariable);
// f. Symbol: used to represent unique identifiers
let uniqueId = Symbol("id");
console.log(uniqueId);
// g. BigInt: used to represent integers that are too large to be represented by the Number type
let bigNumber = BigInt(123456789012345678901234567890);
console.log(bigNumber);

// 2. Non-Primitive Data Types
// a. Object: used to represent complex data structures
let person = {
    name: "Akash Kumar",
    age: 30,
    isStudent: true
};
console.log(person);
// b. Array: used to represent a list of values
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// c. Function: used to represent reusable blocks of code
function greet() {
    console.log("Hello, World!");
}
greet();

