// dom Attributes are used for getting attribute value and setting attribute value of an element.
// There are two types of attribute methods: getAttribute and setAttribute


// GET ATTRIBUTE
// getAttribute is used to get the value of an attribute of an element. It takes the name of the attribute as an argument and returns the value of the attribute.
document.querySelector("h2").getAttribute("class"); // it will return null because there is no class attribute in h2 element.


// SET ATTRIBUTE
// setAttribute is used to set the value of an attribute of an element. It takes two arguments, the name of the attribute and the value of the attribute.
document.querySelector("h2").setAttribute("class", "heading"); // it will set the class attribute of h2 element to heading.



// STYLE
// style is used to get or set the style of an element. It is an object that contains all the CSS properties of an element. We can use it to get or set the value of any CSS property of an element.
let h2Element = document.querySelector("h2");
h2Element.style.color = "red"; // it will set the color of h2 element to red.
h2Element.style.fontSize = "30px"; // it will set the font size of h2 element to 30px.