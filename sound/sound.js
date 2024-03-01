const container = document.getElementById('cont');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
    const button = document.createElement('button');
    button.innerText = sound;

    container.appendChild(button);
    button.addEventListener('click', () => {
        [...document.querySelectorAll('audio')].forEach((x) => x.pause());
        document.getElementById(sound).play();
    });
});