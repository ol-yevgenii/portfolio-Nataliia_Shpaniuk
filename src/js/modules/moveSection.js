export function moveSection() {
    const introduceHeight = document.querySelector('.introduce').offsetHeight;
    const ukraine = document.getElementById('ukraine24');
    const fresenius = document.getElementById('fresenius');
    const instagram = document.getElementById('instagram');
    const leverx = document.getElementById('leverx');
    const youtube = document.getElementById('youtube');

    window.addEventListener('scroll', scrollToSection);

    function scrollToSection() {
        let scroll = window.pageYOffset;
        let scrollToUkraine = introduceHeight - 140;
        let scrollToFresenius = scrollToUkraine + ukraine.offsetHeight;
        let scrollToInstagram = scrollToFresenius + fresenius.offsetHeight;
        let scrollToLeverx = scrollToInstagram + instagram.offsetHeight;
        let scrollToYoutube = scrollToLeverx + leverx.offsetHeight;

        if (scroll > scrollToUkraine) {
            ukraine.classList.add('section_animation');
            ukraine.style.opacity = 1;
        }

        if (scroll > scrollToFresenius) {
            fresenius.classList.add('section_animation');
            fresenius.style.opacity = 1;
        }

        if (scroll > scrollToInstagram) {
            instagram.classList.add('section_animation');
            instagram.style.opacity = 1;
        }

        if (scroll > scrollToLeverx) {
            leverx.classList.add('section_animation');
            leverx.style.opacity = 1;
        }

        if (scroll > scrollToYoutube) {
            youtube.classList.add('section_animation');
            youtube.style.opacity = 1;
        }
        
    }
}