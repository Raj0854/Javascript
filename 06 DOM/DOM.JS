// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. The DOM is a tree-like structure that represents the elements on the page and their relationships to each other.

// The DOM allows developers to manipulate the content and structure of a web page using JavaScript. With the DOM, you can:
// - Access and modify the content of elements on the page
// - Change the style of elements
// - Add or remove elements from the page
// - Respond to user events, such as clicks and keyboard input
// The DOM is a powerful tool for creating dynamic and interactive web pages. By using JavaScript to manipulate the DOM, you can create rich user experiences and build complex web applications.

// Here are some examples of how to use the DOM in JavaScript:  
// 1. Accessing an element by its ID   
const element = document.getElementById('myElement');
// 2. Accessing elements by their class name
const elements = document.getElementsByClassName('myClass');
// 3. Accessing elements by their tag name
const tags = document.getElementsByTagName('p');

// Querying elements using CSS selectors
const query = document.querySelector('.myClass');
const allQueries = document.querySelectorAll('p.myClass');

