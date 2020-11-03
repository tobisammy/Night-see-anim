window.addEventListener('load', () => {
    const filter = document.querySelector('.filter');
    const main = document.getElementById('main');
    const text = document.getElementById('text');

    filter.onclick = function() {
        text.value = '';
        setTimeout(() => {
            main.style.opacity = '0.9';
        }, 2000)
    }
})
