// Loop practice question
// Q. 1 Write a program that prints the even numbers from 1 to 100.
for (let i=1;i<=100;i++){
    if (i%2===0)
        console.log(i)
}
// usnig do while loop
let i=1 
do{
    if (i%2===0)
        console.log(i)
    i++
}while(i<=100);



// Q. 2 Write a program  to guess password. The program should prompt the user to enter a password and check if it matches a predefined password. If the password is correct, display a success message; otherwise, display an error message.
let password="pass123"
let userInput= prompt("Guess the correct password.")

if (password ===userInput)
    console.log("welcome")
else
    userInput=prompt("wrong guess try again.")



// string practice question

// Q.1. Prompt the user to enter their full name. Generate  a username for them based on the input. start username with @ and replace spaces with underscores, followed by their full name and end with fullname length. For example, if the user enters "John Doe", the generated username should be "@John_Doe_8".  
 let fullname= prompt("Enter your fullname")
 let username= `@ ${fullname.replace(" ","_")} ${fullname.length}`
 console.log(fullname)
 console.log(username)


//  Q.2. Write a program that takes a string input from the user and counts the number of vowels (a, e, i, o, u) in the string. Display the count to the user.
let str= prompt("Enter a string")
let count=0
for(let i=0;i<str.length;i++){
    let char=str[i].toLowerCase()
    if (char==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
        count++
    }
}
console.log(`The number of vowels in the string is: ${count}`)