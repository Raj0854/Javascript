// stringd are  sequence of characters. They are used to represent text in programming languages. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `). stings are immutable, which means that once a string is created, it cannot be changed.
// example of string
let name="John"
let message='Hello, World!'
let greeting=`Welcome to JavaScript!`
// template literals
// string interpolation
let fullName="John Doe"
let age=30
let info=`My name is ${fullName} and I am ${age} years old.`
console.log(info)

// string methods
// 1. length: returns the length of a string.
let str="Hello, World!"
console.log(str.length)
// 2. toUpperCase(): converts a string to uppercase letters.
console.log(str.toUpperCase())
// 3. toLowerCase(): converts a string to lowercase letters.
console.log(str.toLowerCase())
// 4. indexOf(): returns the index of the first occurrence of a specified value in a string.
console.log(str.indexOf("World"))
// 5. slice(): extracts a section of a string and returns it as a new string.
console.log(str.slice(0,5))
// 6. replace(): replaces a specified value with another value in a string.
console.log(str.replace("World","JavaScript"))
// 7. split(): splits a string into an array of substrings based on a specified separator.
console.log(str.split(","))
// 8. trim(): removes whitespace from both ends of a string.
let str2="   Hello, World!   "
console.log(str2.trim())

// escaping characters
// to include special characters in a string, you can use escape sequences. An escape sequence is a combination of a backslash (\) followed by a character that represents a special character. For example, to include a double quote in a string, you can use the escape sequence \".
let str3="He said, \"Hello, World!\""
console.log(str3)

// string concatenation
// you can concatenate strings using the + operator or the += operator.
let str4="Hello"
let str5="World"
let str6=str4 + " " + str5
console.log(str6)
str4 += " " + str5
console.log(str4)

// string comparison
// you can compare strings using the == operator or the === operator. The == operator compares the values of the strings, while the === operator compares both the values and the types of the strings.
let str7="Hello"    
let str8="Hello"
console.log(str7 == str8) // true
console.log(str7 === str8) // true