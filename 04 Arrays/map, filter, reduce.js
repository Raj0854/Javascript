// Map array method
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// Syntax:
// array.map(function(currentValue, index, arr), thisValue)
// Example:
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number ** 2);
console.log(squares);
// Output:
// [1, 4, 9, 16, 25]

// Filter array method
// The filter() method creates a new array of all elements in the calling array that pass a test (provided as a function).

// Syntax:
// array.filter(function(currentValue, index, arr), thisValue)
// Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
// Output:
// [2, 4]


// Reduce array method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Syntax:
// array.reduce(function(accumulator, currentValue, index, arr), initialValue)
// Example:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);
// Output:
// 15

// code for finding the maximum product of two numbers in an array using reduce method
const numbers = [1, 2, 3, 4, 5];
const sortedNumbers = numbers.sort((a, b) => b - a);
const maxProduct = sortedNumbers[0] * sortedNumbers[1];
console.log(maxProduct);
// Output:
// 20 (4 * 5)

const maxProduct = numbers.reduce((max, number) => {
  const product = number * Math.max(...numbers.filter((n) => n !== number));
  return Math.max(max, product);
}, 0);
console.log(maxProduct);
// Output:
// 20 (4 * 5)   