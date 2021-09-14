"use strict";

// imports
import toggleBurgers from "./modules/toggleBurger";
import getGallery from "./modules/getGallery";
import Flickity from "flickity";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MicroModal from "micromodal";

gsap.registerPlugin(ScrollTrigger);

// varibles
const burgers = document.querySelectorAll(".burger");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const youTubeItems = document.querySelectorAll(".youtube-item");

let lastScroll = 0;
let currentIndex = 0;

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

  MicroModal.init({
    onClose: (modal) => {
      const iframe = modal.querySelector("iframe");
      if (iframe) iframe.remove();
    },
  });

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
    },
  });

  const flkty = new Flickity(".promos", {
    prevNextButtons: false,
    fade: true,
    imagesLoaded: true,
    wrapAround: true,
  });

  flkty.on("change", function (index) {
    if (index > currentIndex) {
      gsap.from(".is-selected .promo-content", {
        y: 50,
        alpha: 0,
        duration: 0.5,
      });
    } else {
      gsap.from(".is-selected .promo-content", {
        y: -50,
        alpha: 0,
        duration: 0.5,
      });
    }

    gsap.from(".is-selected .promo-pic_left-side", {
      x: -50,
      alpha: 0,
      duration: 1,
    });

    gsap.from(".is-selected .promo-pic_right-side", {
      x: 50,
      alpha: 0,
      duration: 1,
    });

    currentIndex = index;
  });
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";

  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    header.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    header.classList.remove(scrollDown);
  }
  lastScroll = currentScroll;
});

youTubeItems.forEach((item) => {
  item.addEventListener("click", () => {
    const url = item.dataset.video;
    const iframe = `<iframe
                  src="https://www.youtube.com/embed/${url}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>`;
    const modalContent = document.querySelector("#modal-1-content");
    modalContent.insertAdjacentHTML("beforeend", iframe);
  });
});
