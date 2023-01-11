export function toTopArrow() {
    const introduceHight = document.querySelector('.introduce').offsetHeight;
    const arrowToTop = document.querySelector('.arrowToTop[data-toTop]');

    window.addEventListener('scroll', showArrowsToTop);
    arrowToTop.addEventListener('click', scrollToTop);

    function showArrowsToTop() {
        arrowToTop.classList.toggle('show', window.scrollY > introduceHight / 2);
    }

    function scrollToTop(e) {
        e.preventDefault();
        // const arrowLink = e.target;

        if (this === arrowToTop || arrowLink.classList.contains('arrowTop')) {
            window.scrollTo({
                    top: (0,0),
                    behavior: 'smooth'
                });
        }
    }
}