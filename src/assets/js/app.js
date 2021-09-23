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
const dummyCover = document.querySelector(".dummy-cover");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const youTubeItems = document.querySelectorAll(".youtube-item");
const headerTopAnimated = document.querySelectorAll(".header__top_animated");
const galleryCard = document.querySelectorAll(".gallery-card");
const headerCatalog = document.querySelector(".header-catalog");
const mobileCatalog = document.querySelector(".mobile-catalog");
const modalInnerWrap = document.querySelectorAll(".modal-inner-wrap");
const headerCatalogSubcategoriesItem = document.querySelector(
  ".header-catalog__subcategories-item_active"
);
const closeModal = document.querySelector(".close-modal");
// const bottomCloseModal = document.querySelector(".bottom-modal__close");
const asideModal = document.querySelector(".aside-modal");
// const bottomModal = document.querySelector(".bottom-modal");
const headerCatalogOverlay = document.querySelector(".header-catalog__overlay");
const headerCatalogWrapper = document.querySelector(".header-catalog__wrapper");
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
const column = headerCatalogSubcategoriesItem.querySelectorAll(
  ".header-subcategories__column"
);
const headerConsult = document.querySelector(".header-consult");
const headerPhoneNumber = document.querySelector(".header-phone__number");
const headerCallback = document.querySelector(".header-callback");
const modalRequest = document.querySelectorAll(".modal-request");

let currentIndex = 0;
let initialMenuHeight = mobileCatalogList.getBoundingClientRect().height;
let menuHeight = 0;
let newMenuHeight = 0;

window.addEventListener("DOMContentLoaded", () => {
  toggleBurgers(burgers, headerCatalog, mobileCatalog, main, footer);
  getGallery(galleryTabs);

  (() => {
    if (column.length === 4) {
      headerCatalogSubcategoriesItem.style.paddingRight = "0px";
      headerCatalogWrapper.style.background = "#fff";
    }
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
});

window.addEventListener("mousedown", (e) => {
  e.preventDefault();
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
        if (category === "header-subcategory-3") {
          headerCatalogWrapper.classList.add("full");
        } else {
          headerCatalogWrapper.classList.remove("full");
        }
      }, 100);
    }
  });
});

// modalRequest.forEach((item) => {
//   const modalRequest = item.dataset.modal;
//   let modal;

//   item.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (window.innerWidth < 1280 && modalRequest === "modal-city") {
//       modal = document.getElementById(`${modalRequest}_mobile`);
//       bottomModal.classList.add("show");
//       mobileCatalog.classList.remove("show");
//       modal.classList.add("show");
//     } else {
//       modal = document.getElementById(modalRequest);
//       console.log(document.getElementById("modal-city"));
//       asideModal.classList.add("show");
//       modal.classList.add("show");
//     }
//     dummyCover.classList.add("show");
//   });
// });

modalRequest.forEach((item) => {
  const modalRequest = item.dataset.modal;
  const modal = document.getElementById(modalRequest);

  item.addEventListener("click", (event) => {
    event.preventDefault();
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
  const button = item.querySelector("button");
  const like = item.querySelector(".card-icons__like");
  const match = item.querySelector(".card-icons__match");
  const buttonText1 = "в корзину";
  const buttonText2 = "товар в корзине";
  button.addEventListener("click", () => {
    item.classList.toggle("card_in-bucket");
    button.textContent =
      button.textContent === buttonText1 ? buttonText2 : buttonText1;
  });

  like.addEventListener("click", () => {
    like.classList.toggle("card-icons_clicked");
    const isLiked = item.dataset.liked;
    const dataLike = isLiked === "true" ? "false" : "true";
    item.setAttribute("data-liked", dataLike);
  });

  match.addEventListener("click", () => {
    match.classList.toggle("card-icons_clicked");
    const isMatched = item.dataset.match;
    const dataLike = isMatched === "true" ? "false" : "true";
    item.setAttribute("data-match", dataLike);
  });
});

accordionTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  const count = accordionContent.childElementCount;
  const height = count * 48;
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
    menuHeight = openMenuHeight;
    const listTitle = item.dataset.list;
    const list = document.getElementById(listTitle);
    let listHeight = list.getBoundingClientRect().height;
    if (listHeight < initialMenuHeight)
      list.style.height = `${initialMenuHeight + 200}px`;
    setTimeout(() => {
      if (listHeight > initialMenuHeight)
        mobileCatalogList.style.maxHeight = `${listHeight}px`;
      else {
        mobileCatalogList.style.maxHeight = `${initialMenuHeight + 200}px`;
      }
    }, 500);

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

headerCatalogOverlay.addEventListener("click", () => {
  headerCatalog.classList.toggle("show");
  burgers.forEach((item) => item.classList.remove("toggled"));
});

closeModal.addEventListener("click", () => {
  asideModal.classList.remove("show");
  dummyCover.classList.remove("show");
  setTimeout(() => {
    modalInnerWrap.forEach((el) => {
      el.classList.remove("show");
    });
  }, 300);
});

// bottomCloseModal.addEventListener("click", () => {
//   bottomModal.classList.remove("show");
//   dummyCover.classList.remove("show");
// });

dummyCover.addEventListener("click", () => {
  asideModal.classList.remove("show");
  dummyCover.classList.remove("show");
  setTimeout(() => {
    modalInnerWrap.forEach((el) => {
      el.classList.remove("show");
    });
  }, 300);
});

// if (history.scrollRestoration) {
//   history.scrollRestoration = "manual";
// } else {
//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };
// }
