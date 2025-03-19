const hammenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


hammenu.addEventListener('click', () => {
    hammenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})