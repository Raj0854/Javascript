// Q.1 create a h2 heading element with the text "Hello !" and append WORLD to it using JavaScript.
let heading = document.querySelector('h2');
heading.innerText += ' WORLD';


// Q.2 create 3 divs  with common class name "box" Access them and add some unique text to each of them 
 let divs = document.querySelectorAll(".box")
 let idx=1
 for (let div of divs){
    div.innerText =`new unique text ${idx}`;
    idx++
 }

 