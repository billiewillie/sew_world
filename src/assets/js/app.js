"use strict";

// imports
import { query, queryAll } from "./modules/queryFunctions";
import common from "./modules/common";
import getGallery from "./modules/getGallery";

import Flickity from "flickity";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MicroModal from "micromodal";
// https://github.com/yairEO/validator
import FormValidator from "@yaireo/validator";

gsap.registerPlugin(ScrollTrigger);

// varibles
const consultForm = query("#consult-form");
const subscribeForm = query("#subscribe-form");
const modalCallForm = query("#modal-call-form");
const modalQuestionForm = query("#modal-question-form");
const modalLoginForm = query("#modal-login-form");
const modalLoginCodeForm = query("#modal-login-form-code");
const asideModalWelcomeMessage = query(".aside-modal-welcome-message");
const galleryTabs = queryAll(".gallery-tab");
const youTubeItems = queryAll(".youtube-item");
const headerTopAnimated = queryAll(".header__top_animated");
const headerConsult = query(".header-consult");
const headerPhoneNumber = query(".header-phone__number");
const headerCallback = query(".header-callback");

let currentIndex = 0;

common();

window.addEventListener("DOMContentLoaded", () => {
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

  setTimeout(() => {
    headerPhoneNumber.style.animationFillMode = "inherit";
    headerConsult.style.animationFillMode = "inherit";
    headerCallback.style.animationFillMode = "inherit";
  }, 2000);
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
    const modalContent = query("#modal-1-content");
    modalContent.insertAdjacentHTML("beforeend", iframe);
  });
});

[(subscribeForm, consultForm)].forEach((item) => {
  if (!item) return;
  const validatorConsult = new FormValidator(
    {
      events: ["blur", "paste", "change"],
      texts: {
        empty: "необходимо ввести значение",
        invalid: "неправильное значение",
        short: "слишком короткое значение",
        long: "слишком длинное значение",
        email: "email введен неправильно",
        number_min: "номер короткий",
        number_max: "номер слишком длинный",
        checked: "нужно ваше согласие",
      },
    },
    item
  );

  item.addEventListener("submit", (e) => {
    e.preventDefault();
    const submit = true;
    const validatorResult = validatorConsult.checkAll(item);
    if (validatorResult.valid) {
      MicroModal.show("modal-success-form");
      item.reset();
    }
    return !!validatorResult.valid;
  });
});

[modalQuestionForm, modalCallForm].forEach((item) => {
  if (!item) return;
  const validatorConsult = new FormValidator(
    {
      events: ["blur", "paste", "change"],
      texts: {
        empty: "необходимо ввести значение",
        invalid: "неправильное значение",
        short: "слишком короткое значение",
        long: "слишком длинное значение",
        email: "email введен неправильно",
        number_min: "номер короткий",
        number_max: "номер слишком длинный",
        checked: "нужно ваше согласие",
      },
    },
    item
  );

  item.addEventListener("submit", (e) => {
    e.preventDefault();
    // const submit = true;
    const validatorResult = validatorConsult.checkAll(item);
    if (validatorResult.valid) {
      const parent = item.closest(".modal-inner-wrap");
      parent.querySelector(".aside-modal__title").textContent =
        "Ваша заявка успешно отправлена";
      parent.querySelector(".aside-modal__subtitle").textContent =
        "Мы перезвоним вам в ближайшее время";
      item.remove();
    }
    return !!validatorResult.valid;
  });
});

const modalLoginFormValidator = new FormValidator(
  {
    events: ["blur", "paste", "change"],
    texts: {
      empty: "необходимо ввести значение",
      invalid: "неправильное значение",
      short: "слишком короткое значение",
      long: "слишком длинное значение",
      email: "email введен неправильно",
      number_min: "номер короткий",
      number_max: "номер слишком длинный",
      checked: "нужно ваше согласие",
      smsCode: "неправильный код",
    },
  },
  modalLoginForm
);

modalLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const validatorResult = modalLoginFormValidator.checkAll(modalLoginForm);
  if (validatorResult.valid) {
    modalLoginForm.classList.add("hidden");
    modalLoginCodeForm.classList.remove("hidden");
  }
  return !!validatorResult.valid;
});

const modalLoginCodeFormValidator = new FormValidator(
  {
    events: ["blur", "paste", "change"],
    texts: {
      empty: "необходимо ввести значение",
      invalid: "неправильное значение",
      short: "слишком короткое значение",
      long: "слишком длинное значение",
      email: "email введен неправильно",
      number_min: "номер короткий",
      number_max: "номер слишком длинный",
      checked: "нужно ваше согласие",
      smsCode: "неправильный код",
    },
    regex: {
      myCustomRegex: "1111",
    },
  },
  modalLoginCodeForm
);

modalLoginCodeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const validatorResult =
    modalLoginCodeFormValidator.checkAll(modalLoginCodeForm);
  if (validatorResult.valid) {
    modalLoginCodeForm.classList.add("hidden");
    asideModalWelcomeMessage.classList.remove("hidden");
    const parent = modalLoginCodeForm.closest(".modal-inner-wrap");
    parent.querySelector(".aside-modal__title").textContent =
      "Добро пожаловать в личный кабинет";
  }
  return !!validatorResult.valid;
});
