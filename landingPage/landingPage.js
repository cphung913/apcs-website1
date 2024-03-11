const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const modal = document.getElementById('modal')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

open.addEventListener('click', () => {
    modal.classList.add('show-modal');
});