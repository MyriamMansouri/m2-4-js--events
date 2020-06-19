// useful elements of the DOM
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const btnDiv = document.querySelector("#buttons");
const scoreNumber = document.querySelector("#score-number");
const timeSpan = document.querySelector("#time");
const finalScoreScreen = document.querySelector("#final-score-screen");
const messageDiv = document.querySelector("#message");
const backBtn = document.querySelector("#back-btn");

// moveBtnInterval, updateGameDurationInterval will hold setInterval() for buttons moves and game remaining duration update
let moveBtnInterval = undefined;
let updateGameDurationInterval = undefined;

// initialize number of buttons and game duration
// when game starts, all buttons are red
const btnNum = Math.floor(Math.random() * 15) + 1;
let gameDuration = (Math.floor(Math.random() * 15) + 1);
let greenBtnNumber = 0;

// changes is player won
let hasWon = false;

// initialize score and remaining time in Dom
scoreNumber.innerText = btnNum;
timeSpan.innerText = gameDuration;

// returns a random value
// used to change buttons coordinates in moveBtn() (top and left css properties actually)
setMove = (position) => {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    const randomMove = plusOrMinus * Math.floor(Math.random() * 3);
    position = position + randomMove;
    return position > 100 ? 100 : position;
}

// update game remaining duration
const updateGameDuration = () => {
    gameDuration--;
    timeSpan.innerText = `${gameDuration}`;
}

// The buttons are moving !
// change buttons' top and left properties
const moveBtn = () => {
    for (let  i = 0; i < btnNum; i++) {
        const movingBtn = document.querySelector(`#btn-${i}`);
        positionLeft = parseInt(movingBtn.style.left.slice(0, -1));
        positionTop = parseInt(movingBtn.style.top.slice(0, -1));
        movingBtn.style.left = setMove(positionLeft) + '%';
        movingBtn.style.top = setMove(positionTop) + '%';
    }    
}

// turns buttons to green
// tracks number of green buttons
// Add number to the DOM
const turnToGreen = (e) =>  {
    if (!e.target.classList.contains("is-green")) {
        e.target.classList.add("is-green");
        greenBtnNumber++ ;
        scoreNumber.innerText = btnNum - greenBtnNumber;   
    }
    if (btnNum === greenBtnNumber) {
        hasWon = true;
        endOfGame();
    }
}

const endOfGame = () =>  {
    
    // remove buttons event listeners
    [...btnDiv.children].forEach( btn => {
        btn.removeEventListener("click", turnToGreen)
    });
    // remove setInterval for moving buttons and game remaining duration
    clearInterval(moveBtnInterval);
    clearInterval(updateGameDurationInterval);

    // message to player
    gameScreen.style.display = "none";
    finalScoreScreen.style.display = "flex";
    let message = hasWon ? "✨ You win" : "😭 You lose";
    messageDiv.innerText = message;

}

// intialize game
// create moving buttons and wait for clicks
// game stops after random time
const startGame = () => {

    for (let  i = 0; i < btnNum; i++) {
        const btn = document.createElement("button");
        btn.innerHTML = "Catch me";
        btn.classList.add("btn","btn-game");
        btn.id = `btn-${i}`
        btn.style.top = Math.floor(Math.random() * 100) + '%'
        btn.style.left = Math.floor(Math.random() * 100) + '%'
        btnDiv.appendChild(btn);
        btn.addEventListener("click", turnToGreen);
    }
    // move buttons until game duration is over or player won
    moveBtnInterval = setInterval(moveBtn, 100);
    updateGameDurationInterval = setInterval(updateGameDuration, 1000);
    setTimeout(endOfGame, gameDuration * 1000);
};

// display game screen and start the game
const displayGameScreen = () => {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    startBtn.removeEventListener("click", displayGameScreen)
    startGame();
};

startBtn.addEventListener("click", displayGameScreen);

const reloadPage = () => {
    location.reload()
}


backBtn.addEventListener("click", reloadPage);




