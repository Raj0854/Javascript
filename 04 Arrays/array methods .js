// array methods
// 1. push() => adds an element at the end of the array
let arr=[1,2,3]
arr.push(4)
console.log(arr)
// 2. pop() => removes the last element of the array
arr.pop()
console.log(arr)
// 3. unshift() => adds an element at the beginning of the array
arr.unshift(0)
console.log(arr)
// 4. shift() => removes the first element of the array
arr.shift()
console.log(arr)
// 5. indexOf() => returns the index of the first occurrence of an element in the array
console.log(arr.indexOf(2))
// 6. toString() => converts the array to a string
console.log(arr.toString())
// 7. concat() => merges two or more arrays and returns a new array
let arr2=[4,5,6]
let mergedArr=arr.concat(arr2)
console.log(mergedArr)
// 8. slice() => returns a shallow copy of a portion of an array into a new array object
let slicedArr=mergedArr.slice(2,5)
console.log(slicedArr)
// 9. splice() => changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
arr.splice(2,2,7,8)
console.log(arr)

// add element at index 2 and remove 2 elements from index 2 and add 7 and 8 in place of removed elements
