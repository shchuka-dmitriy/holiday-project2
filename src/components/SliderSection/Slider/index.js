import slideImg from './components/Slide';
import './styles.scss';

import {createRadioBtnElem, createSliderInfoContainerElem, createSliderNameElem, 
		createSliderDescriptionElem, createSliderImgElem} from './htmlComposer';

const sliderImgElem = createSliderImgElem();
const sliderInfoContainerElem = createSliderInfoContainerElem();
const sliderDescriptionElem = createSliderDescriptionElem(sliderInfoContainerElem);
const sliderNameElem = createSliderNameElem(sliderInfoContainerElem);
const Slider = 
	{
		slidesList: 		[],
		currentSlide: 		0,
		getNextSlideId: 	function() {
        return (this.currentSlide + 1) % this.slidesList.length;
    },
    getLength() {
        return this.slidesList.length;
    },
};

export default function(slidesList) {
    const sliderWrapper = document.createElement('div');   
	Slider.slidesList = slidesList;
    sliderWrapper.appendChild(sliderImgElem);
    sliderWrapper.appendChild(sliderInfoContainerElem);
    createRadioBtnElem(sliderInfoContainerElem, Slider.getLength());
    createSlide();
    return sliderWrapper;
}

export function setSlider(newCurrentSlide) {
    Slider.currentSlide = newCurrentSlide;
    sliderHide( [sliderImgElem, sliderDescriptionElem, sliderNameElem] );
    setTimeout( () => {
        sliderImgElem.removeChild(sliderImgElem.firstChild);
        sliderImgElem.appendChild(slideImg(Slider.slidesList[Slider.currentSlide].img));
        sliderDisplay( [sliderImgElem, sliderDescriptionElem, sliderNameElem] );
    }, 500);
    sliderDescriptionElem.innerText = Slider.slidesList[Slider.currentSlide].description;
    sliderNameElem.innerText = Slider.slidesList[Slider.currentSlide].name;
    createSliderButton();
}

setInterval(() => {
    setSlider(Slider.getNextSlideId());
}, 6000);

function sliderDisplay(sliderElems) {
    sliderElems.forEach(slide => {
        slide.classList.remove('sliderClose');
    });
}
function sliderHide(sliderElems) {
    sliderElems.forEach(slide => {
        slide.classList.add('sliderClose');
    });
}

function createSlide() {
    sliderDescriptionElem.innerText = Slider.slidesList[Slider.currentSlide].description;
    sliderNameElem.innerText = Slider.slidesList[Slider.currentSlide].name;
    sliderImgElem.appendChild(slideImg(Slider.slidesList[Slider.currentSlide].img));
}

function createSliderButton() {
    const sliderButton = document.getElementsByClassName('sliderSwich')[0];
    sliderButton.childNodes.forEach((slide, sliderCheck) => {
        slide.classList.remove('activeSlide');
        if(sliderCheck === Slider.currentSlide)
            slide.classList.add('activeSlide');
    })
}