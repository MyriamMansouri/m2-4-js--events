const BTN_NUM = 20;

let greenBtnNumber = 0;
const scoreNumber = document.querySelector("#score-number");
scoreNumber.innerText = BTN_NUM;

const doSomething = (e) =>  {
    e.target.classList.toggle("is-green");
    // sums up number of buttons toggled to green
    e.target.classList.contains("is-green") ? greenBtnNumber++ : greenBtnNumber-- ;
    scoreNumber.innerText = BTN_NUM - greenBtnNumber;
    
}

for (let  i = 0; i < BTN_NUM; i++) {
    const btn = document.createElement("button");
    btn.innerHTML = "Catch me";
    btn.className = "btn";
    btn.id = `btn-${i}`
    btn.style.top = Math.floor(Math.random() * 100) + '%'
    btn.style.left = Math.floor(Math.random() * 100) + '%'
    const main = document.querySelector(".main");
    main.appendChild(btn);
    btn.addEventListener("click", doSomething);
}

// ============ Got creative =================

// The buttons are moving !
const moveBtn = () => {
    for (let  i = 0; i < BTN_NUM; i++) {
        const movingBtn = document.querySelector(`#btn-${i}`);
        positionLeft = parseInt(movingBtn.style.left.slice(0, -1));
        positionTop = parseInt(movingBtn.style.top.slice(0, -1));
        movingBtn.style.left = setMove(positionLeft) + '%';
        movingBtn.style.top = setMove(positionTop) + '%';
    }
}

setMove = (position) => {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    const randomMove = plusOrMinus * Math.floor(Math.random() * 3);
    position = position + randomMove;
    return position > 100 ? 100 : position;
}

setInterval(moveBtn, 100);