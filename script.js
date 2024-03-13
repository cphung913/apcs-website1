const button = document.getElementById('open');
const content = document.querySelector('.content');
const overlay = document.getElementById('overlay');

button.addEventListener('click', () => {
    content.classList.add('active');
    overlay.classList.add('active');
});