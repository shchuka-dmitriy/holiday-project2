import sliderRadioButtons from '../components/RadioButton';

export function createSliderImgElem() {
  const sliderImg = document.createElement('div');
  sliderImg.classList.add('sliderImg');
  return sliderImg;
}

export function createSliderInfoContainerElem() {
  const sliderInfoContainerElem = document.createElement('div');
  sliderInfoContainerElem.classList.add('sliderInfoContainer');
  return sliderInfoContainerElem;
}

export function createSliderDescriptionElem(elem) {
  const sliderDescriptionElem = document.createElement('p');
  elem.appendChild(sliderDescriptionElem);
  return sliderDescriptionElem;
}

export function createSliderNameElem(elem) {
  const sliderNameElem = document.createElement('span');
  elem.appendChild(sliderNameElem);
  return sliderNameElem;
}

export function createRadioBtnElem(elem, length) {
  const radioBtnElem = sliderRadioButtons(length);
  elem.appendChild(radioBtnElem);
}