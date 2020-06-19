

const hoursDiv = document.querySelector("#hours");
const minutesDiv = document.querySelector("#minutes");
const secondsDiv = document.querySelector("#seconds");
const btn = document.querySelector("#timer-btn");

let totalSeconds = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

// set timer to on/off state
let isOn =  false;

// timerInterval updates timer every second
let timerInterval = undefined;

const updateTime = () => {

    totalSeconds++ ;

    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60) % 60;
    hours = Math.floor(totalSeconds / 3600);

    secondsDiv.innerText = beautifyTime(seconds);
    minutesDiv.innerText = beautifyTime(minutes);
    hoursDiv.innerText = beautifyTime(hours);
}

const beautifyTime = (time) => {
    return time.toString().length === 1 ? '0' + time : '' + time;
}

const toggleTimer = () => {
    isOn = !isOn;

    if (isOn) {
        timerInterval = setInterval(updateTime, 1000);
        btn.innerHTML = "Stop";
    } else {
        clearInterval(timerInterval);
        btn.innerHTML = "Start";
        totalSeconds = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        secondsDiv.innerText = '00';
        minutesDiv.innerText = '00';
        hoursDiv.innerText = '00';
    }
}

btn.addEventListener("click", toggleTimer);