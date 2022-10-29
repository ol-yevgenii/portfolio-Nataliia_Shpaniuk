export function burger() {
    const menu = document.querySelector('.nav');
    const burger = document.querySelector('.menu_icon');

    burger.addEventListener('click', openCloseMenu);

    function openCloseMenu() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
    }
}