// Exercise 1.0
// ------------
console.log('exercise-1');

const body = document.querySelector("body");
let text = ""
const addText = () => {
    text = text + "Hey you! ";
    body.innerText = text;

};

document.addEventListener("click", addText)