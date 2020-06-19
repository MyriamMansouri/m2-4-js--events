const BTN_NUM = 20;

const doSomething = (e) =>  {
    e.target.classList.toggle("is-green");
}

for (let  i =0; i < BTN_NUM; i++) {
    const btn = document.createElement("button");
    btn.innerHTML = "Click me";
    btn.className = "btn";
    const main = document.querySelector(".main");
    main.appendChild(btn);
    btn.addEventListener("click", doSomething);
}