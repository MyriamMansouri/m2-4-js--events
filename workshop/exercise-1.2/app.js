// Exercise 1.2
// ------------
console.log('exercise 1.2');

// set game duration in seconds and update DOM with the information
let gameDuration = (Math.floor(Math.random() * 5) + 1);
let clicksToWin = (Math.floor(Math.random() * 10) + 1);

// Select useful elements from the DOM
const timeSpan = document.querySelector("#time");
const btn = document.querySelector("#reload-btn");
const result = document.querySelector("#result");
const resultText = document.querySelector("#result-text");
const rules = document.querySelector("#rules");

timeSpan.innerText = gameDuration ;

// count clicks
let clickNum = 0;
const countClicks = () => {
    clickNum++;
};

// update time and send it to the DOM
// write if player won
const updateTime = () => {
    gameDuration--
    timeSpan.innerText = `${gameDuration}`;
    if (gameDuration === 0 ) {
        // update DOM
        rules.style.display = "none";
        result.style.display = "block";
        message = clickNum >= clicksToWin ? "She is happy!" : "Nooo! The unicorn is still hungry.";
        message = message + `\n You gave ${clickNum} cupcakes to the unicorn.`
        resultText.innerText = message;
        // remove interval and eventListeners
        unicorn.removeEventListener("click", countClicks);
        clearInterval(updateTimeInterval);
    }
}

// update time counter
const updateTimeInterval = setInterval(updateTime, 1000);

// wait for clicks
let unicorn = document.querySelector("#unicorn");
unicorn.addEventListener("click", countClicks);


const reloadGame = () => {
    location.reload()
}

btn.addEventListener("click", reloadGame)

