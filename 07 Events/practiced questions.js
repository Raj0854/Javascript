//  create a button and add event listener to it for dark mode toggle when clicked light mode and dark mode should be toggled on each click
 let button = document.querySelector('button');
let body = document.querySelector('body');
let mode = 'light';

button.addEventListener('click', function() {
    if (mode === 'light') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        mode = 'dark';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        mode = 'light';
    }
});
