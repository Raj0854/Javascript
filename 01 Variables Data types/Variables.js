// variables are containers for storing data values
a = "apple";
//  here a is a variable and apple is the value stored in it
console.log(a);
// this will print the value of a which is apple in console

// rules for naming variables
// 1. variable names can only contain letters, numbers, underscores and dollar signs
// 2. variable names must begin with a letter, underscore or dollar sign
// 3. variable names are case sensitive
// 4. variable names cannot be reserved keywords
// 5. variable names should be meaningful and descriptive

// prefer to use camelCase for variable names
// example of camelCase: firstName, lastName, age, etc.
// where the first letter of the first word is lowercase and the first letter of each subsequent word is uppercase.

// variables can be declared using var, let and const keywords
// var is variable where the value can be redeclared and updated and is globally scoped
// let is variable where the value can be updated but cannot be redeclared and is block scoped
// const is variable where the value cannot be updated or redeclared and is block scoped

// example of var
var x = 10;
console.log(x);
x = 20;
console.log(x);
var x = 30;
console.log(x);

// example of let
let y = 10;
console.log(y);
y = 20;
console.log(y);
// let y = 30; // this will throw an error because y is already declared

// example of const
const z = 10;
console.log(z);
// z = 20; // this will throw an error because z is a constant
