//  Events in JavaScript
// 1. What is an Event?
//  The change in the state of the object is called an event. It can be user interaction, such as a click or a key press, or it can be a change in the state of the object, such as a page load or a form submission.

// 2. Types of Events
//  - Mouse Events: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup
//  - Keyboard Events: keydown, keyup, keypress
//  - Form Events: submit, change, focus, blur
//  - Window Events: load, resize, scroll, unload


// 3. Event Listeners
//  An event listener is a function that is called when an event occurs. It is used to handle events and perform actions in response to them. You can add an event listener to an element using the addEventListener() method.
// Example:
// Get the button element
const button = document.getElementById('myButton');
// Add a click event listener to the button
button.addEventListener('click', function() {
    alert('Button was clicked!');
});
// event remover
// To remove an event listener, you can use the removeEventListener() method. You need to pass the same function reference that was used to add the event listener.
// Example:
function handleClick() {
    alert('Button was clicked!');
}
button.addEventListener('click', handleClick);
// To remove the event listener
button.removeEventListener('click', handleClick);


// 4. Event Object
//  When an event occurs, an event object is created and passed to the event listener function. The event object contains information about the event, such as the type of event, the target element, and the coordinates of the mouse pointer.
// Example:
button.addEventListener('click', function(event) {
    console.log('Event type: ' + event.type);
    console.log('Target element: ' + event.target);
    console.log('Mouse coordinates: (' + event.clientX + ', ' + event.clientY + ')');
});

// 5. Event handling
//  You can handle events in different ways, such as using inline event handlers, using the on-event properties, or using the addEventListener() method. It is generally recommended to use the addEventListener() method for better separation of concerns and to avoid conflicts with other event handlers.
// Example of inline event handler:
<button onclick="alert('Button was clicked!')">Click me</button>

