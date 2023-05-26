window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.page.main').children[0];
    const style = document.createElement('style');
    document.head.appendChild(style);

    function check() {
        const windowHeight = window.innerHeight;
        const height = main.offsetHeight;
        if(windowHeight > height) {
            style.innerText = ``;
            return;
        }
        style.innerText = `
            .main .canvas {
                transform: scale(${(windowHeight / height).toFixed(2)});
            }
        `
    }
    check();
    window.addEventListener('resize', check);
})