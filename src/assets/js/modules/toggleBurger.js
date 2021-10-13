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
  cover.classList.toggle("show-for-catalog");
  if (window.innerWidth >= 1280) {
    desktopMenu.classList.toggle("show");
  } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
    main.classList.toggle("hidden-by-mobile-catalog");
    footer.classList.toggle("hidden-by-mobile-catalog");
    wrapper.classList.toggle("opened-mobile-menu");
    mobileMenu.classList.toggle("show");
  } else if (window.innerWidth < 768) {
    main.classList.toggle("hidden-by-mobile-catalog");
    footer.classList.toggle("hidden-by-mobile-catalog");
    wrapper.classList.toggle("opened-mobile-menu");
    mobileMenu.classList.toggle("show");
  }
};

export default toggleBurgers;
