document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.getElementById('side-bar');
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu');

    menu.addEventListener('click', () => {
        sideBar.style.transform = 'translate(0)';
    })
    close.onclick = function() {
        sideBar.style.transform = 'translateX(-100%)';
    }
})
