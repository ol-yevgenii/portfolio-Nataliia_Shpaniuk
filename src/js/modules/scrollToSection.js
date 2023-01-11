export function sctollToSection() {
    const navLinks = document.querySelectorAll('.nav_link[data-scroll]');
    const menuClose = document.querySelector('.nav');
    const navLink = document.querySelectorAll('.nav_animation-wrapper');
    const burgerClose = document.querySelector('.menu_icon');
    
    if (navLinks.length > 0) {
        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            e.preventDefault();
            if (this.dataset.scroll && document.querySelector(this.dataset.scroll)) {
                const scrollBlock = document.querySelector(this.dataset.scroll);
                const scrollToBlockValue = scrollBlock.getBoundingClientRect().top - document.querySelector('.header').offsetHeight + 70;

                if (menuClose.classList.contains('active-on')) {
                    burgerClose.classList.remove('active');
                    menuClose.classList.remove('active-on');
                    menuClose.classList.add('active-off');
                    navLink.forEach(item => {
                        item.classList.remove('nav_animation-on');
                        item.classList.add('nav_animation-off');
                    })
                    document.body.classList.remove('lock');
                }

                window.scrollTo({
                    top: scrollToBlockValue,
                    behavior: 'smooth'
                });
            }
        }
    }

}