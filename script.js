const button = document.getElementById('open');
const content = document.querySelector('.content');
const overlay = document.getElementById('overlay');
const boxes = document.querySelectorAll('.box');

button.addEventListener('click', () => {
    content.classList.add('active');
    overlay.classList.add('active');
});

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        overlay.classList.remove('active');
        content.classList.remove('active');
    }
});

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        window.location = e.target.dataset.link;
    })
});