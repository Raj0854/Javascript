// forEach loop is used to iterate over an array and execute a function for each element in the array. It is a built-in method in JavaScript and is available on all arrays.

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)
// Parameters:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// arr (optional): The array that forEach is being applied to.
// thisValue (optional): A value to be passed to the function to be used as its this value.
// Example:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number**2);
});
// Output:
// 1
// 4
// 9
// 16
// 25

// In this example, we have an array of numbers and we use the forEach loop to iterate over each number in the array. For each number, we calculate its square and log it to the console.

// callback function can also be used with forEach loop. A callback function is a function that is passed as an argument to another function and is executed after the outer function has completed. In the case of forEach, the callback function is executed for each element in the array.
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});
// Output:
// APPLE
// BANANA
// CHERRY