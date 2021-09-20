const toggleBurgers = (burgers, desktopMenu, mobileMenu, main, footer) => {
  burgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      burger.classList.toggle("toggled");
      main.classList.toggle("hidden-by-mobile-catalog");
      footer.classList.toggle("hidden-by-mobile-catalog");
      if (window.innerWidth >= 1280) {
        desktopMenu.classList.toggle("show");
      } else mobileMenu.classList.toggle("show");
    });
  });
};

export default toggleBurgers;
