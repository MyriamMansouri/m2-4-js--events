
const timerInput = document.querySelector("#timer-input");
const timerForm = document.querySelector("#timer-form");
const btn = document.querySelector("#timer-btn");

let seconds = 0;

// set timer to on/off state
let isOn =  false;

// timerInterval updates timer every second
let timerInterval = undefined;

let endSound = undefined;

// update timer until it reaches 0
const updateTime = () => {
    seconds-- ;
    timerInput.value = seconds;
    if (seconds === 0) {
        endSound = new sound("chime.mp3");
        endSound.play();
        endOfTimer();
    }
}

//toggle start/stop state
const toggleTimer = () => {
    
    isOn = !isOn && validateInput(parseInt(timerInput.value));

    if (isOn) {
        seconds = timerInput.value;
        timerInput.disabled =true;
        timerInterval = setInterval(updateTime, 1000);
        btn.innerHTML = "Stop";
    } else {
        endOfTimer();
    }
}

const endOfTimer = () => {
    isOn = false;
    timerInput.disabled = false ;
    clearInterval(timerInterval);
    btn.innerHTML = "Start";
    seconds = 0;
    timerInput.value = 0;
}

// validate if input is a number
const validateInput = (input) => {
    return isNaN(input) || input <= 0 ? false : true ;
}

const sound = function(src)  {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

btn.addEventListener("click", toggleTimer);