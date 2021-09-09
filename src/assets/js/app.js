'use strict';

// imports
import toggleBurgers from './modules/toggleBurger';
import getGallery from './modules/getGallery';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// varibles
const burgers = document.querySelectorAll('.burger');
const galleryTabs = document.querySelectorAll('.gallery-tab');

window.addEventListener('DOMContentLoaded', () => {

  toggleBurgers(burgers);
  getGallery(galleryTabs);

  gsap.set(".gallery-item__middle", {y: 80});
  gsap.to('.gallery-item__middle', {
    scrollTrigger: {
      trigger: '.gallery',
      scrub: true,
      toggleActions: "play none none none"
    },
    y: -80,
  })

});