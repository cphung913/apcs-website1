const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    window.scrollY >= 250 ? nav.classList.add('active') : nav.classList.remove('active');
});