'use strict';

// lazyloading for images
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// slider
import Flickity from 'flickity';

const ARROW = 'M0 50.3489C0 50.4822 0.0596932 50.5823 0.179077 50.6656L13.0924 61.5683C13.1919 61.6516 13.3113 61.7016 13.4705 61.7016C13.7888 61.7016 14.0077 61.5016 14.0077 61.2682C14.0077 61.1348 13.9679 61.0015 13.8684 60.9181L5.75033 54.1165L1.65147 50.7323L5.65084 50.7823H99.4827C99.7612 50.7823 100 50.5989 100 50.3489C100 50.0988 99.7612 49.8988 99.4827 49.8988H5.65084L1.65147 49.9488L5.75033 46.5813L13.8684 39.7629C13.9878 39.6796 14.0077 39.5629 14.0077 39.4295C14.0077 39.1961 13.7888 38.9961 13.4705 38.9961C13.3113 38.9961 13.1521 39.0294 12.8736 39.2795L0.179077 50.0154C0.0596932 50.1155 0 50.2155 0 50.3489Z';

window.addEventListener('DOMContentLoaded', () => {

  // slider на главной для раздела Обучение
  try {
    const flky = new Flickity('.courses', {
      pageDots: false,
      freeScroll: true,
      watchCSS: true,
      arrowShape: ARROW,
      cellAlign: 'left'
    });
  } catch (e) {
    console.log(e);
  }

  // slider на главной для раздела Бренды
  try {
    const flky = new Flickity('.brands-carousel', {
      pageDots: false,
      freeScroll: true,
      arrowShape: ARROW,
      cellAlign: 'left'
    });
  } catch (e) {
    console.log(e);
  }

    // slider на главной для раздела Тематические подборки
    try {
      const flky = new Flickity('.topics-list', {
        pageDots: false,
        freeScroll: true,
        watchCSS: true,
        arrowShape: ARROW,
        cellAlign: 'left'
      });
    } catch (e) {
      console.log(e);
    }

});