const background = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;
let opacity = 1;
let blur = 0;

function blurring() {
    load++;

    text.innerText = `${load}%`;
    text.style.opacity = opacity;
    background.style.filter = `blur(${blur}px)`;
}