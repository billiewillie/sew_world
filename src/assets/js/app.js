"use strict";

// imports
import { query, queryAll, queryId } from "./modules/queryFunctions";
import toggleBurgers from "./modules/toggleBurger";
import citiesFilter from "./modules/citiesFilter";
import getGallery from "./modules/getGallery";
import noCopy from "./modules/noCopy";
import searchReset from "./modules/searchReset";
import iconSearchFunction from "./modules/iconSearchFunction";
import closeModalFunction from "./modules/closeModalFunction";
import dummyCoverClick from "./modules/dummyCoverClick";
import countElements from "./modules/countElements";
import setBannerWidth from "./modules/setBannerWidth";

import Flickity from "flickity";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MicroModal from "micromodal";
import FormValidator from "@yaireo/validator"; // https://github.com/yairEO/validator

gsap.registerPlugin(ScrollTrigger);

// varibles
const burgers = queryAll(".burger");
const iconSearch = query(".header-icons__item_search");
const inputSearch = query(".search-form__input");
const searchResults = query(".search-form__results");
const searchButtonReset = query(".search-form__button");
const searchForm = query(".search-form");
const consultForm = query("#consult-form");
const subscribeForm = query("#subscribe-form");
const modalCallForm = query("#modal-call-form");
const modalQuestionForm = query("#modal-question-form");
const modalLoginForm = query("#modal-login-form");
const modalLoginCodeForm = query("#modal-login-form-code");
const asideModalWelcomeMessage = query(".aside-modal-welcome-message");
const dummyCover = query(".dummy-cover");
const wrapper = query(".wrapper");
const main = query(".main");
const footer = query(".footer");
const galleryTabs = queryAll(".gallery-tab");
const header = query(".header");
const body = query("body");
const youTubeItems = queryAll(".youtube-item");
const headerTopAnimated = queryAll(".header__top_animated");
const galleryCard = queryAll(".gallery-card");
const searchCard = queryAll(".search-form__results-item");
const headerCatalog = query(".header-catalog");
const headerBucket = query("[data-bucket]");
const headerLiked = query("[data-liked]");
const headerMatched = query("[data-match]");
const mobileCatalog = query(".mobile-catalog");
const modalInnerWrap = queryAll(".modal-inner-wrap");
const headerCatalogSubcategoriesItem = query(
  ".header-catalog__subcategories-item_active"
);
const closeModal = query(".close-modal");
const asideModal = query(".aside-modal");
const headerCatalogCategories = queryAll(".header-catalog__category");
const mobileCatalogList = query(".mobile-catalog__list");
const backBtn = queryAll(".mobile-catalog__accordion-inner-item-back");

const accordionTrigger = queryAll(
  ".mobile-catalog__item_accordion .mobile-catalog__item-link"
);
const innerListOpener = queryAll(".mobile-catalog__accordion-item > a");
const banner = headerCatalogSubcategoriesItem.querySelector(
  ".header-subcategories__banner"
);
const headerConsult = query(".header-consult");
const headerPhoneNumber = query(".header-phone__number");
const headerCallback = query(".header-callback");
const modalRequest = queryAll(".modal-request");
const inputCities = query("#cities-filter");
const itemsCitiesList = query(".modal-city__list");
const itemsCities = query(".modal-city__list").getElementsByTagName("li");

noCopy();

let isOpenCatalog = false;
let currentIndex = 0;
let initialMenuHeight = mobileCatalogList.getBoundingClientRect().height;
const goodsToMatch = [];
const likedGoods = [];
const goodsInBucket = [];

inputCities.addEventListener("keyup", (e) =>
  citiesFilter(e, itemsCities, itemsCitiesList)
);

inputSearch.addEventListener("keyup", (e) => {
  const text = e.target.value;
  setTimeout(() => {
    searchResults.classList.add("show");
  }, 500);

  if (text.length === 0) {
    setTimeout(() => {
      searchResults.classList.remove("show");
    }, 500);
  }
});

headerCatalog.addEventListener("click", (e) => {
  if (headerCatalog.classList.contains("show")) {
    if (
      !e.target.closest(".header-catalog__categories") &&
      !e.target.closest(".header-catalog__subcategories")
    ) {
      console.log(1);
      headerCatalog.classList.remove("show");
      dummyCover.classList.remove("show-for-catalog");
      burgers.forEach((burger) => {
        burger.classList.toggle("toggled");
      });
    }
  }
});

burgers.forEach((burger) => {
  burger.addEventListener("click", () => {
    toggleBurgers(
      burger,
      headerCatalog,
      mobileCatalog,
      main,
      footer,
      dummyCover,
      wrapper,
      header
    );
    isOpenCatalog = !isOpenCatalog;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  getGallery(galleryTabs);

  setBannerWidth(banner, headerCatalogSubcategoriesItem);

  headerTopAnimated.forEach((item) => {
    setTimeout(() => {
      item.classList.add("stop-animation");
    }, 2000);
  });

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

document.addEventListener("click", (e) => {
  if (searchForm.classList.contains("show")) {
    if (
      e.target.closest(".search-form") === null &&
      e.target.closest(".header-icons__item_search") === null
    ) {
      searchForm.classList.remove("show");
      searchResults.classList.remove("show");
      inputSearch.value = "";
    }
  }
});

window.addEventListener("scroll", () => {
  let lastScroll = 100;
  const currentScroll = window.pageYOffset;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";

  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

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

  if (searchForm.classList.contains("show")) {
    dummyCover.classList.remove("show-for-catalog");
    burgers.forEach((item) => item.classList.remove("toggled"));
  }
  searchForm.classList.remove("show");
  searchResults.classList.remove("show");
  inputSearch.value = "";
});

headerCatalogCategories.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    setTimeout(() => {
      e.preventDefault();
      headerCatalogCategories.forEach((item) => {
        item.classList.remove("header-catalog__category_active");
      });
      item.classList.add("header-catalog__category_active");
      const category = item.dataset.target;
      const target = queryId(category);
      const targetClass = "header-catalog__subcategories-item_active";
      const currentActive = query(`.${targetClass}`);
      if (!target.classList.contains(targetClass)) {
        currentActive.classList.remove(targetClass);
        target.classList.add(targetClass);
      }
    }, 200);
  });
});

modalRequest.forEach((item) => {
  const modalRequestItem = item.dataset.modal;
  const modal = queryId(modalRequestItem);

  item.addEventListener("click", (event) => {
    event.preventDefault();
    headerCatalog.classList.remove("show");
    mobileCatalog.classList.remove("show");
    burgers.forEach((item) => item.classList.remove("toggled"));
    asideModal.classList.add("show");
    modal.classList.add("show");
    dummyCover.classList.add("show");
  });
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

countElements(
  galleryCard,
  goodsInBucket,
  likedGoods,
  goodsToMatch,
  headerBucket,
  headerLiked,
  headerMatched
);

countElements(
  searchCard,
  goodsInBucket,
  likedGoods,
  goodsToMatch,
  headerBucket,
  headerLiked,
  headerMatched
);

accordionTrigger.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const accordionContent = item
      .closest(".mobile-catalog__item_accordion")
      .querySelector(".mobile-catalog__accordion-content");
    const count = accordionContent.childElementCount;
    const height = count * 45;
    accordionContent.classList.toggle("open");
    if (accordionContent.classList.contains("open")) {
      accordionContent.style.height = `${height}px`;
    } else {
      accordionContent.style.height = 0;
    }
  });
});

innerListOpener.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const listTitle = item.dataset.list;
    const list = queryId(listTitle);
    let listHeight = list.getBoundingClientRect().height;
    if (listHeight < initialMenuHeight)
      list.style.height = `${initialMenuHeight + 200}px`;
    if (listHeight > initialMenuHeight)
      mobileCatalogList.style.maxHeight = `${listHeight}px`;
    else {
      mobileCatalogList.style.maxHeight = `${initialMenuHeight + 200}px`;
    }

    list.classList.add("show");
  });
});

backBtn.forEach((item) => {
  const list = item.closest(".mobile-catalog__accordion-inner-list");
  item.addEventListener("click", (e) => {
    mobileCatalogList.style.maxHeight = "inherit";
    list.classList.remove("show");
  });
});

closeModal.addEventListener("click", () =>
  closeModalFunction(
    asideModal,
    main,
    footer,
    dummyCover,
    wrapper,
    isOpenCatalog,
    modalInnerWrap
  )
);

dummyCover.addEventListener("click", () =>
  dummyCoverClick(
    asideModal,
    headerCatalog,
    dummyCover,
    burgers,
    isOpenCatalog,
    modalInnerWrap
  )
);

iconSearch.addEventListener("click", () =>
  iconSearchFunction(
    searchForm,
    dummyCover,
    inputSearch,
    headerCatalog,
    mobileCatalog
  )
);

searchButtonReset.addEventListener("click", () =>
  searchReset(searchForm, searchResults, inputSearch, dummyCover)
);

[(subscribeForm, consultForm)].forEach((item) => {
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
