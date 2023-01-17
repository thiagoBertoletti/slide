navegacao
import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');

console.log(slide);
=======
import Slide from './slide.js';

const slide = new Slide('.slide', '.slide-wrapper');
slide.init();
console.log(slide);

slide.changeSlide(3);
slide.activePrevSlide();
 main
