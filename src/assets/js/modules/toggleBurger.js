const toggleBurgers = (
  burgers,
  desktopMenu,
  mobileMenu,
  main,
  footer,
  cover,
  wrapper,
  header
) => {
  burgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      burger.classList.toggle("toggled");
      cover.classList.toggle("show-for-catalog");
      header.classList.remove("scroll-down");
      if (window.innerWidth >= 1280) {
        desktopMenu.classList.toggle("show");
      } else if (window.innerWidth < 768) {
        main.classList.toggle("hidden-by-mobile-catalog");
        footer.classList.toggle("hidden-by-mobile-catalog");
        mobileMenu.classList.toggle("show");
        wrapper.classList.toggle("opened-mobile-menu");
      } else {
        mobileMenu.classList.toggle("show");
      }
    });
  });
};

export default toggleBurgers;
