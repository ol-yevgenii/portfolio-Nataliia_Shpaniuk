export function sctollToSection() {
    const navLinks = document.querySelectorAll('.nav_link[data-scroll]');
    const menuClose = document.querySelector('.nav');
    const burgerClose = document.querySelector('.menu_icon');
    
    if (navLinks.length > 0) {
        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            e.preventDefault();
            const menuLink = e.target;
            if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
                const scrollBlock = document.querySelector(menuLink.dataset.scroll);
                const scrollToBlockValue = scrollBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

                if (menuClose.classList.contains('active')) {
                    burgerClose.classList.remove('active');
                    menuClose.classList.remove('active');
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