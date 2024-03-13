const button = document.getElementById('open');
const content = document.querySelecotr('.content');
const overlay = document.getElementById('overlay');

button.addEventListener('click', () => {
    content.classList.add('active');
    overlay.classList.add('active');
});