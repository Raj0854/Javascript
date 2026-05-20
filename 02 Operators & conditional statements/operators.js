// Operators are used to perform operations on variables and values. In JavaScript, there are several types of operators, including:

// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation 

// 2. Assignment Operators
let c = 20;
c += 5; // c = c + 5
console.log(c);
c -= 5; // c = c - 5
console.log(c);
c *= 2; // c = c * 2
console.log(c);
c /= 2; // c = c / 2
console.log(c);
c %= 3; // c = c % 3
console.log(c);
c **= 2; // c = c ** 2
console.log(c);

// 3. Comparison Operators
console.log(a == b); // Equal to
console.log(a === b); // Strict equal to with data type check
console.log(a != b); // Not equal to    
console.log(a !== b); // Strict not equal to with data type check
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to


// 4. Logical Operators
let x = true;
let y = false;
console.log(x && y); // Logical AND
console.log(x || y); // Logical OR
console.log(!x); // Logical NOT

// 5. ternary Operator
//  condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
