

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// update time every second
const updateTime = () => {
    let currentTime = new Date();
    
    hours.innerText = beautifyTime(currentTime.getHours());
    minutes.innerText = beautifyTime(currentTime.getMinutes());
    seconds.innerText = beautifyTime(currentTime.getSeconds());
}


const beautifyTime = (time) => {
    console.log(time.toString().length === 1 ? '0' + time : '' + time)
    return time.toString().length === 1 ? '0' + time : '' + time;
}

setInterval(updateTime, 1000);