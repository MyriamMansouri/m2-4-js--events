

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// update time every second
const updateTime = () => {
    let currentTime = new Date();
    
    hours.innerText = currentTime.getHours();
    minutes.innerText = currentTime.getMinutes();
    seconds.innerText = currentTime.getSeconds();
}
setInterval(updateTime, 1000);