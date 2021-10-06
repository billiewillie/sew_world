const toggleBurgers = (
  burger,
  desktopMenu,
  mobileMenu,
  main,
  footer,
  cover,
  wrapper,
  header
) => {
  burger.classList.toggle("toggled");
  header.classList.remove("scroll-down");
  if (window.innerWidth >= 1280) {
    desktopMenu.classList.toggle("show");
    cover.classList.toggle("show-for-catalog");
  } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    main.classList.toggle("hidden-by-mobile-catalog");
    footer.classList.toggle("hidden-by-mobile-catalog");
    wrapper.classList.toggle("opened-mobile-menu");
  } else if (window.innerWidth < 768) {
    main.classList.toggle("hidden-by-mobile-catalog");
    footer.classList.toggle("hidden-by-mobile-catalog");
    mobileMenu.classList.toggle("show");
  }
};

export default toggleBurgers;
