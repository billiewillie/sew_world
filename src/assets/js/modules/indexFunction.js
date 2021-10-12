import { query, queryAll } from "./queryFunctions";
import getGallery from "./getGallery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flickity from "flickity";

gsap.registerPlugin(ScrollTrigger);

const promos = query(".promos");
const galleryTabs = queryAll(".gallery-tab");
const headerTopAnimated = queryAll(".header__top_animated");
const headerConsult = query(".header-consult");
const headerPhoneNumber = query(".header-phone__number");
const headerCallback = query(".header-callback");

let currentIndex = 0;

const indexFunction = () => {
  if (query(".body_index")) {
    getGallery(galleryTabs);

    headerTopAnimated.forEach((item) => {
      setTimeout(() => {
        item.classList.add("stop-animation");
      }, 2000);
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1280px)": function () {
        let tlGallery = gsap.timeline({
          scrollTrigger: {
            trigger: ".gallery",
            start: "top 30%",
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
            start: "top 0%",
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

        let tlCoverAbout = gsap.timeline({
          scrollTrigger: {
            trigger: ".about .cover",
            start: "top 96%",
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
            y: -70,
          },
          {
            y: 80,
          }
        );

        tlArticles.to(".articles-list", {
          y: -60,
        });

        tlAboutText.from(".about__title", {
          y: 100,
        });

        tlAboutPic.from(".about__pic", {
          alpha: 0.3,
        });

        tlCoverAbout.to(".about .cover", {
          height: 0,
          duration: 1.5,
        });

        gsap.from(".categories-item", {
          y: 80,
          alpha: 0,
          delay: 0.8,
          stagger: 0.1,
        });

        gsap.from(".promo-content > *", {
          y: 50,
          alpha: 0,
          duration: 1,
          stagger: 0.1,
        });

        gsap.from(".promo-pic_left-side", {
          x: -50,
          alpha: 0,
          duration: 1,
        });

        gsap.from(".promo-pic_right-side", {
          x: 50,
          alpha: 0,
          duration: 1,
        });
      },
    });

    const flkty = new Flickity(promos, {
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

    setTimeout(() => {
      headerPhoneNumber.style.animationFillMode = "inherit";
      headerConsult.style.animationFillMode = "inherit";
      headerCallback.style.animationFillMode = "inherit";
    }, 2000);
  }
};

export default indexFunction;
