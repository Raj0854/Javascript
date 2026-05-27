// To insert any value in the DOM First of all we need to create that new element and which we want to insert
// For that we have a method called createElement() and we can use it like this

// creating a new element
let newElement = document.createElement("h1");

// Now we have created a new element but it is not in the DOM yet, to insert it in the DOM we have 4 methods
// 1. append() method
// it is used to insert the element at the end of the element(inside the element)
// for example if we want to insert the newElement at the end of the body then we can do it like this
let body = document.querySelector("body");
body.append(newElement);
// 2. prepend() method
// it is used to insert the element at the beginning of the element(inside the element)
// for example if we want to insert the newElement at the beginning of the body then we can do it like this
body.prepend(newElement);
// 3. before() method
// it is used to insert the element before the element(outside the element)
// for example if we want to insert the newElement before the body then we can do it like this
body.before(newElement);
// 4. after() method
// it is used to insert the element after the element(outside the element)
// for example if we want to insert the newElement after the body then we can do it like this
body.after(newElement);

// delete the element
// to delete the element we can use the remove() method
newElement.remove();