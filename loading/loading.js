const background = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;
let opacity = 1;

text.innerText = `${load}%`;
text.style.opacity = opacity;