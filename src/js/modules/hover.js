export function hoverEffect() {
    const sliderImgWrapper = document.querySelectorAll('.picture');

    const sliderTextWrapper = document.createElement('div');
    const sliderText = document.createElement('p');

    sliderText.innerText = 'Tap to read more';
    sliderTextWrapper.classList.add('image-slider__text');
    
    sliderImgWrapper.forEach(img => {
        img.addEventListener('mouseover', (e) => {
            let target = e.target;

            target.parentNode.appendChild(sliderTextWrapper);
            sliderTextWrapper.appendChild(sliderText);

            target.style.opacity = '.3';
        })

        img.addEventListener('mouseout', (e) => {
            let target = e.target;

            target.parentNode.removeChild(sliderTextWrapper);

            target.style.opacity = '1';
        })
   })

}