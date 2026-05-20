// Q.1 Get user input a number and check if the number is positive, negative or zero.
let num = prompt("Enter a number:");
num = Number(num);
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
}
else {    console.log("The number is zero.");
}

// Q.2 Get user input a number and check if the number is multiple of 5.
let num = prompt("Enter a number:");
num = Number(num);
if (num % 5 === 0) {
    console.log("The number is a multiple of 5.");
} else {
    console.log("The number is not a multiple of 5.");
}