// Exercise 1.1
// ------------
console.log('exercise 1.1');

let body = document.querySelector("body");
let isClicked = false;

const handleClick = () => {
    isClicked = true;
};

body.addEventListener("click", handleClick);

const endTheGame = () => {
    const alertMessage = isClicked === true ? "You won." : "He won.";
    body.innerHTML = `<p>${alertMessage}</>`;
    removeEventListener("click", handleClick);
};
setTimeout(endTheGame, 1000)