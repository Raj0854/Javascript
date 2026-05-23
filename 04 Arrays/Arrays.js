// Arrays are the collection of items.
// They are used to store multiple values in a single variable.
// Arrays are created using square brackets [] and the items are separated by commas.
// arrays are mutable, meaning you can change the elements of an array after it has been created.

// creating an array
let marks = [85, 90, 78, 92, 88];

// arrays indices start from 0, so the first element is at index 0, the second element is at index 1, and so on.
console.log(marks[0]); // Output: 85


// looping over an array
// for loop
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
// for...of loop
for (let mark of marks) {
    console.log(mark);
}