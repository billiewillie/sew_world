'use strict';

// imports
import toggleBurgers from './modules/toggleBurger';
import getGallery from './modules/getGallery';
import Flickity from 'flickity';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// varibles
const burgers = document.querySelectorAll('.burger');
const galleryTabs = document.querySelectorAll('.gallery-tab');

window.addEventListener('DOMContentLoaded', () => {

  toggleBurgers(burgers);
  getGallery(galleryTabs);

  ScrollTrigger.matchMedia({
    "(min-width: 1280px)": function() {

      gsap.from('.wrapper', {
        alpha: 0,
        duration: 4
      })

      let tlGallery = gsap.timeline({
        scrollTrigger: {
          trigger: '.gallery',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlCourses = gsap.timeline({
        scrollTrigger: {
          trigger: '.courses',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlPicture = gsap.timeline({
        scrollTrigger: {
          trigger: '.pic_bounded',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlArticles = gsap.timeline({
        scrollTrigger: {
          trigger: '.content',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlAboutPic = gsap.timeline({
        scrollTrigger: {
          trigger: '.about__pic',
          start: 'top 80%',
          toggleActions: "play none none none"
        }
      })

      let tlAboutText = gsap.timeline({
        scrollTrigger: {
          trigger: '.about__title',
          start: 'bottom 100%',
          toggleActions: "play none none none"
        }
      })

      tlGallery.fromTo(".gallery-item__middle", {
        y: 80
      }, {
        y: -80
      })

      tlCourses.fromTo(".course_animated", {
        y: 40
      }, {
        y: -40
      })
      
      tlPicture.to(".pic_bounded", {
        y: 100
      })

      tlArticles.fromTo(".articles-list", {
        y: 20
      }, {
        y: -60
      })

      tlAboutText.from(".about__title", {
        y: 100
      })

      tlAboutPic.from(".about__pic", {
        alpha: .3
      })

      // gsap.to('.promo-pic_left-side', {
      //   x: -100,
      //   alpha: 0
      // })
    }
  })

  // const flkty = new Flickity('.promos');
  // flkty.on('change', function(index) {
  //   gsap.to('.promo-pic_left-side', {
  //     x: -100,
  //     alpha: 0,
  //     duration: 1,
  //   })
  //   gsap.from('.is-selected .promo-pic_left-side', {
  //     x: -100,
  //     alpha: 0,
  //     duration: 2,
  //     stagger: 1
  //   })
  // });

});