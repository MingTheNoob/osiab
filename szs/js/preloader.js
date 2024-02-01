const preloader = document.getElementById('preloader');
preloader.style.display = 'block';

window.addEventListener('load', () => {
    setInterval(() => {
        preloader.style.display = 'none';
    }, 1000)
})