export function burger() {
    const menu = document.querySelector('.nav');
    const menuItem = document.querySelectorAll('.nav_animation-wrapper');
    const burger = document.querySelector('.menu_icon');

    burger.addEventListener('click', openCloseMenu);

    function openCloseMenu() {
        burger.classList.toggle('active');
        // menu.classList.toggle('active');

        if (menu.classList.contains('active-off')) {
            menu.classList.remove('active-off');
            menu.classList.add('active-on');
        } else {
            menu.classList.remove('active-on');
            menu.classList.add('active-off');
        }

        menuItem.forEach(item => {
            if (item.classList.contains('nav_animation-off')) {
                item.classList.remove('nav_animation-off');
                item.classList.add('nav_animation-on');
            } else {
                item.classList.remove('nav_animation-on');
                item.classList.add('nav_animation-off');
            }
        })
        
        
        document.body.classList.toggle('lock');
    }
}