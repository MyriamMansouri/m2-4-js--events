const BTN_NUMB = 20;

const changeBtn = (e) => {
    e.target.style.backgroundColor = "#03fc94"; // green
    e.target.style.color = "#2c3632"; // grey
}

for (let i = 0 ; i < BTN_NUMB; i++) {
    const btn = document.createElement("button");
    btn.innerText = "Click me";
    btn.className = "btn"
    const main = document.querySelector(".main");
    main.appendChild(btn);

    btn.addEventListener("click", changeBtn);
}


