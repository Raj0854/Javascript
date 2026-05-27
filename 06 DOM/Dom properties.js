// document object has many properties that allow you to access and manipulate the content of a web page. Some of the most commonly used properties include:

// 1. tagName: This property returns the name of the tag of an element. For example, if you have a <div> element, the tagName property will return "DIV".
const element = document.getElementById('myElement');
console.log(element.tagName); // Output: "DIV"

// 2. innerHTML: This property allows you to get or set the HTML content of an element. You can use it to change the content of an element dynamically.
const element = document.getElementById('myElement');
console.log(element.innerHTML);

// 3. innerText: This property allows you to get or set the text content of an element. It is similar to innerHTML, but it only returns the text content without any HTML tags.
const element = document.getElementById('myElement');
console.log(element.innerText);

// 4. textContent: This property is similar to innerText, but it returns the text content of an element, including any hidden text. It is often used when you want to get the text content of an element without any formatting.
const element = document.getElementById('myElement');
console.log(element.textContent);

