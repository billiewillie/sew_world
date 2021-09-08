'use strict';

//imports
import toggleBurgers from './modules/toggleBurger';
import getGallery from './modules/getGallery';

//varibles
const burgers = document.querySelectorAll('.burger');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const gallerySection = document.querySelectorAll('.gallery-section');

window.addEventListener('DOMContentLoaded', () => {

  toggleBurgers(burgers);
  getGallery(galleryTabs);

});