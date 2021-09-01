'use strict';

// lazyloading for images
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Flickity from 'flickity';

import showYear from './modules/year';
// const targetBurger = document.querySelector('.target-burger');
// const nav = document.querySelector('.nav.nav-mobile');
// const main = document.querySelector('main.main');
// const footer = document.querySelector('footer');
// const body = document.querySelector('body');
const year = document.querySelector('.year');

window.addEventListener('DOMContentLoaded', () => {

    // показать актуальный год в футере
    showYear(year);


    // slider на главной для раздела Обучение
    try {
        const flky = new Flickity('.courses', {
            pageDots: false,
            freeScroll: true,
            watchCSS: true,
            arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z',
            cellAlign: 'left'
        });
    } catch (e) {
        console.log(e);
    }

    //   // home first slider
    //   try {
    //     if (window.innerWidth < 1600) {
    //       sliderWithSetings({
    //         slide: '.offer__slide',
    //         slider: "[data-slider]",
    //         prevArrow: ".offer__slider-prev",
    //         nextArrow: ".offer__slider-next",
    //         totalCounter: '#total',
    //         currentCounter: '#current',
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 700,
    //         firstSlidePar: 0,
    //         variableWidthPar: false,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     } else {
    //       sliderWithSetings({
    //         slide: '.offer__slide',
    //         slider: "[data-slider]",
    //         prevArrow: ".offer__slider-prev",
    //         nextArrow: ".offer__slider-next",
    //         totalCounter: '#total',
    //         currentCounter: '#current',
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 1500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     }

    //   } catch (e) {
    //     console.log(e);
    //   }

});