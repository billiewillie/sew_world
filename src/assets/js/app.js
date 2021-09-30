"use strict";

// imports
import toggleBurgers from "./modules/toggleBurger";
import citiesFilter from "./modules/citiesFilter";
import getGallery from "./modules/getGallery";
import Flickity from "flickity";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MicroModal from "micromodal";
import FormValidator from "@yaireo/validator"; // https://github.com/yairEO/validator

gsap.registerPlugin(ScrollTrigger);

// varibles
const burgers = document.querySelectorAll(".burger");
const iconSearch = document.querySelector(".header-icons__item_search");
const inputSearch = document.querySelector(".search-form__input");
const searchResults = document.querySelector(".search-form__results");
const searchButtonReset = document.querySelector(".search-form__button");
const searchForm = document.querySelector(".search-form");
const consultForm = document.querySelector("#consult-form");
const subscribeForm = document.querySelector("#subscribe-form");
const dummyCover = document.querySelector(".dummy-cover");
const wrapper = document.querySelector(".wrapper");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const youTubeItems = document.querySelectorAll(".youtube-item");
const headerTopAnimated = document.querySelectorAll(".header__top_animated");
const galleryCard = document.querySelectorAll(".gallery-card");
const headerCatalog = document.querySelector(".header-catalog");
const headerBucket = document.querySelector("[data-bucket]");
const headerLiked = document.querySelector("[data-liked]");
const headerMatched = document.querySelector("[data-match]");
const mobileCatalog = document.querySelector(".mobile-catalog");
const modalInnerWrap = document.querySelectorAll(".modal-inner-wrap");
const headerCatalogSubcategoriesItem = document.querySelector(
  ".header-catalog__subcategories-item_active"
);
const closeModal = document.querySelector(".close-modal");
const asideModal = document.querySelector(".aside-modal");
const headerCatalogCategories = document.querySelectorAll(
  ".header-catalog__category"
);
const mobileCatalogList = document.querySelector(".mobile-catalog__list");
const backBtn = document.querySelectorAll(
  ".mobile-catalog__accordion-inner-item-back"
);
const accordionContent = document.querySelector(
  ".mobile-catalog__accordion-content"
);
const accordionTrigger = document.querySelector(
  ".mobile-catalog__item_accordion .mobile-catalog__item-link"
);
const innerListOpener = document.querySelectorAll(
  ".mobile-catalog__accordion-item > a"
);
const banner = headerCatalogSubcategoriesItem.querySelector(
  ".header-subcategories__banner"
);
const headerConsult = document.querySelector(".header-consult");
const headerPhoneNumber = document.querySelector(".header-phone__number");
const headerCallback = document.querySelector(".header-callback");
const modalRequest = document.querySelectorAll(".modal-request");
const inputCities = document.querySelector("#cities-filter");
const itemsCitiesList = document.querySelector(".modal-city__list");
const itemsCities = document
  .querySelector(".modal-city__list")
  .getElementsByTagName("li");

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

let currentIndex = 0;
let initialMenuHeight = mobileCatalogList.getBoundingClientRect().height;

let goodsToMatch = [];
let likedGoods = [];
let goodsInBucket = [];

window.addEventListener("DOMContentLoaded", () => {
  toggleBurgers(
    burgers,
    headerCatalog,
    mobileCatalog,
    main,
    footer,
    dummyCover,
    wrapper,
    header
  );
  getGallery(galleryTabs);

  (() => {
    if (banner) {
      const subcategories = Array.from(
        headerCatalogSubcategoriesItem.querySelectorAll(
          ".header-subcategories__column"
        )
      );
      const elWidth = subcategories.reduce((acc, category) => {
        return acc + category.getBoundingClientRect().width;
      }, 0);
      banner.style.width = `${elWidth}px`;
    }
  })();

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

  searchForm.classList.remove("show");
  searchResults.classList.remove("show");
  inputSearch.value = "";
});

window.addEventListener("mousedown", (e) => {
  if (e.which === 2) e.preventDefault();
});

headerCatalogCategories.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.getAttribute("href") === null) {
      setTimeout(() => {
        e.preventDefault();
        headerCatalogCategories.forEach((item) => {
          item.classList.remove("header-catalog__category_active");
        });
        item.classList.add("header-catalog__category_active");
        const category = item.dataset.target;
        const target = document.getElementById(category);
        const targetClass = "header-catalog__subcategories-item_active";
        const currentActive = document.querySelector(`.${targetClass}`);
        if (!target.classList.contains(targetClass)) {
          currentActive.classList.remove(targetClass);
          target.classList.add(targetClass);
        }
      }, 100);
    }
  });
});

modalRequest.forEach((item) => {
  const modalRequest = item.dataset.modal;
  const modal = document.getElementById(modalRequest);

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
    const modalContent = document.querySelector("#modal-1-content");
    modalContent.insertAdjacentHTML("beforeend", iframe);
  });
});

galleryCard.forEach((item) => {
  const id = +item.dataset.id;
  const button = item.querySelector("button");
  const like = item.querySelector(".card-icons__like");
  const match = item.querySelector(".card-icons__match");
  const buttonText1 = "в корзину";
  const buttonText2 = "товар в корзине";
  button.addEventListener("click", () => {
    if (!goodsInBucket.includes(id)) {
      goodsInBucket.push(id);
      item.classList.add("card_in-bucket");
      button.textContent = buttonText2;
    } else {
      goodsInBucket = goodsInBucket.filter((el) => el !== id);
      item.classList.remove("card_in-bucket");
      button.textContent = buttonText1;
    }

    const length = goodsInBucket.length;
    const amount = headerBucket.querySelector(".header-icons__amount");
    headerBucket.dataset.bucket = length;

    if (length > 0) {
      headerBucket.classList.add("header-icons__item_highlighted");
    } else {
      headerBucket.classList.remove("header-icons__item_highlighted");
    }
    amount.textContent = length;
  });

  like.addEventListener("click", () => {
    if (!likedGoods.includes(id)) {
      likedGoods.push(id);
      like.classList.add("card-icons_clicked");
      item.setAttribute("data-liked", "true");
    } else {
      likedGoods = likedGoods.filter((el) => el !== id);
      like.classList.remove("card-icons_clicked");
      item.setAttribute("data-liked", "false");
    }

    const length = likedGoods.length;
    const amount = headerLiked.querySelector(".header-icons__amount");
    headerLiked.dataset.liked = length;

    if (length > 0) {
      headerLiked.classList.add("header-icons__item_highlighted");
    } else {
      headerLiked.classList.remove("header-icons__item_highlighted");
    }
    amount.textContent = length;
  });

  match.addEventListener("click", () => {
    if (!goodsToMatch.includes(id)) {
      goodsToMatch.push(id);
      match.classList.add("card-icons_clicked");
      item.setAttribute("data-match", "true");
    } else {
      goodsToMatch = goodsToMatch.filter((el) => el !== id);
      match.classList.remove("card-icons_clicked");
      item.setAttribute("data-match", "false");
    }

    const length = goodsToMatch.length;
    const amount = headerMatched.querySelector(".header-icons__amount");
    headerMatched.dataset.match = length;

    if (length > 0) {
      headerMatched.classList.add("header-icons__item_highlighted");
    } else {
      headerMatched.classList.remove("header-icons__item_highlighted");
    }
    amount.textContent = length;
  });
});

accordionTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  const count = accordionContent.childElementCount;
  const height = count * 46;
  accordionContent.classList.toggle("open");
  if (accordionContent.classList.contains("open")) {
    accordionContent.style.height = `${height}px`;
  } else {
    accordionContent.style.height = 0;
  }
});

innerListOpener.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const openMenuHeight = mobileCatalogList.getBoundingClientRect().height;
    const listTitle = item.dataset.list;
    const list = document.getElementById(listTitle);
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

closeModal.addEventListener("click", () => {
  asideModal.classList.remove("show");
  dummyCover.classList.remove("show");
  main.classList.remove("hidden-by-mobile-catalog");
  footer.classList.remove("hidden-by-mobile-catalog");
  dummyCover.classList.remove("show");
  dummyCover.classList.remove("show-for-catalog");
  wrapper.classList.remove("opened-mobile-menu");
  setTimeout(() => {
    modalInnerWrap.forEach((el) => {
      el.classList.remove("show");
    });
  }, 300);
});

dummyCover.addEventListener("click", () => {
  asideModal.classList.remove("show");
  dummyCover.classList.remove("show");
  headerCatalog.classList.remove("show");
  dummyCover.classList.remove("show");
  dummyCover.classList.remove("show-for-catalog");
  burgers.forEach((burger) => burger.classList.remove("toggled"));
  setTimeout(() => {
    modalInnerWrap.forEach((el) => {
      el.classList.remove("show");
    });
  }, 300);
});

iconSearch.addEventListener("click", () => {
  searchForm.classList.add("show");
});

searchButtonReset.addEventListener("click", () => {
  searchForm.classList.remove("show");
  searchResults.classList.remove("show");
  inputSearch.value = "";
});

function killCopy(e) {
  return false;
}

function reEnable() {
  return true;
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
  document.onmousedown = killCopy;
  document.onclick = reEnable;
}

// formValidation(consultForm);
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
  consultForm
);

consultForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submit = true;
  const validatorResult = validatorConsult.checkAll(consultForm);
  if (validatorResult.valid) {
    MicroModal.show("modal-success-form");
    consultForm.reset();
  }
  return !!validatorResult.valid;
});

const validatorSubscribe = new FormValidator(
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
  subscribeForm
);

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submit = true;
  const validatorResult = validatorSubscribe.checkAll(subscribeForm);
  if (validatorResult.valid) {
    MicroModal.show("modal-success-form");
    subscribeForm.reset();
  }
  return !!validatorResult.valid;
});
