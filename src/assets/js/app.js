"use strict";

// imports
import toggleBurgers from "./modules/toggleBurger";
import getGallery from "./modules/getGallery";
import Flickity from "flickity";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// varibles
const burgers = document.querySelectorAll(".burger");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const header = document.querySelector(".header");

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

window.addEventListener("DOMContentLoaded", () => {
  toggleBurgers(burgers);
  getGallery(galleryTabs);

  ScrollTrigger.matchMedia({
    "(min-width: 1280px)": function () {
      let tlGallery = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery",
          scrub: true,
          toggleActions: "play none none none",
        },
      });

      let tlCourses = gsap.timeline({
        scrollTrigger: {
          trigger: ".courses",
          scrub: true,
          toggleActions: "play none none none",
        },
      });

      let tlPicture = gsap.timeline({
        scrollTrigger: {
          trigger: ".pic_bounded",
          scrub: true,
          toggleActions: "play none none none",
        },
      });

      let tlArticles = gsap.timeline({
        scrollTrigger: {
          trigger: ".content",
          scrub: true,
          toggleActions: "play none none none",
        },
      });

      let tlAboutPic = gsap.timeline({
        scrollTrigger: {
          trigger: ".about__pic",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      let tlAboutText = gsap.timeline({
        scrollTrigger: {
          trigger: ".about__title",
          start: "bottom 100%",
          toggleActions: "play none none none",
        },
      });

      tlGallery.fromTo(
        ".gallery-item__middle",
        {
          y: 80,
        },
        {
          y: -80,
        }
      );

      tlCourses.fromTo(
        ".course_animated",
        {
          y: 40,
        },
        {
          y: -40,
        }
      );

      tlPicture.fromTo(
        ".pic_bounded",
        {
          y: -80,
        },
        {
          y: 80,
        }
      );

      tlArticles.fromTo(
        ".articles-list",
        {
          y: 20,
        },
        {
          y: -60,
        }
      );

      tlAboutText.from(".about__title", {
        y: 100,
      });

      tlAboutPic.from(".about__pic", {
        alpha: 0.3,
      });

      // gsap.to('.promo-pic_left-side', {
      //   x: -100,
      //   alpha: 0
      // })
    },
  });

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

// $(window).scroll(function () {
//   const scroll = window.offsetTop;

//   // if (scroll >= 100) header.addClass("fixed");
//   // else header.removeClass("fixed");
// });

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;
  console.log(scroll);
  if (scroll >= 120) header.classList.add("fixed");
  else header.classList.remove("fixed");
});
