import { appendById, loadJSON } from '../../../utils';
import createSlider from '../Slider';

loadJSON('/data/slider.json')
    .then( ( slides ) => {
        appendById('slider', createSlider( slides ));
    });