const background = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;

const int = setInterval(blurring, 40);

function blurring() {
    load++;

    if (load > 99) clearInterval(int);
    text.innerText = `${load}%`;
    text.style.opacity = 1 - load / 100;
    background.style.filter = `blur(${30 - load * 30 / 100}px)`;
}