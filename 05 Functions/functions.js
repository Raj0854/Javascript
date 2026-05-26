// function is a block of code that performs a specific task again and again, as long as you call it
// function declaration
// 1
function functionName() {
    // code to be executed
}
// 2
function functionName(parameters) {
    // code to be executed
}
// function call
functionName();

// function expression
const functionName = function() {
    // code to be executed
};
// function with parameters
function functionName(parameter1, parameter2) {
    // code to be executed
}   
// function with return value
function functionName(parameter1, parameter2) {
    // code to be executed
    return parameter1 + parameter2;
}
// function with default parameters
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
    // code to be executed
}
// function with rest parameters
// rest parameters allow us to represent an indefinite number of arguments as an array
// rest parameters start with three dots (...) followed by the name of the array that will hold the rest of the parameters
function functionName(...parameters) {
    // code to be executed
}
