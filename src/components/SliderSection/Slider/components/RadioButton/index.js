import { setSlider } from '../../index';

export default function(slidesListLength) {
    const sliderWrapper = document.createElement('div');
    for (let i = 0; i < slidesListLength; i++) {
        const sliderContainerElem = document.createElement('div');
        sliderContainerElem.setAttribute('num', i);
        sliderWrapperEventListener(sliderContainerElem);
        sliderWrapper.appendChild(sliderContainerElem);
    }
    sliderWrapper.firstChild.classList.add('activeSlide');
    sliderWrapper.classList.add('sliderSwich');
    return sliderWrapper;
}

function sliderWrapperEventListener(sliderContainerElem) {
    sliderContainerElem.addEventListener('click', (e) => {
        const newCurrentSlide = Number(e.target.getAttribute('num'));
        setSlider(newCurrentSlide);
    });
}