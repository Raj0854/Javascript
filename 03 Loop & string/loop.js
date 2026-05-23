//  Loop are used to execute a piece  of code again and again until match a specific condition.
// there are some types of loop:
// 1. For loop
// The for loop is used to execute a block of code a specific number of times. The syntax for a for loop is as follows:
for(let i=1;i<=5;i++){
    console.log(i)

}

// 2. While loop
// The while loop is used to execute a block of code repeatedly as long as a specified condition is true. The syntax for a while loop is as follows:
let j=1
while(j<=5){
    console.log(j)
    j++
}

// 3. Do while loop
// The do-while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false. The syntax for a do-while loop is as follows:
let k=1
do{
    console.log(k)
    k++
}while(k<=5)


// 4. For...in loop
// The for...in loop is used to iterate over the properties of an object. The syntax for a for...in loop is as follows:
let person={
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in person){
    console.log(key, person[key]);
}

// 5. For...of loop
// The for...of loop is used to iterate over the values of an iterable object, such as an array or a string. The syntax for a for...of loop is as follows:
let fruits=["apple","banana","orange"]
for(let fruit of fruits){
    console.log(fruit)
}