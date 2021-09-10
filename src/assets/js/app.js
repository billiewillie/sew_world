'use strict';

// imports
import toggleBurgers from './modules/toggleBurger';
import getGallery from './modules/getGallery';
import animate from './modules/animation';

// varibles
const burgers = document.querySelectorAll('.burger');
const galleryTabs = document.querySelectorAll('.gallery-tab');

window.addEventListener('DOMContentLoaded', () => {

  toggleBurgers(burgers);
  getGallery(galleryTabs);
  animate();

});