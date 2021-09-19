const toggleBurgers = (burgers, desktopMenu) => {
  burgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      burger.classList.toggle("toggled");
      if (window.innerWidth >= 1280) {
        desktopMenu.classList.toggle("show");
      }
    });
  });
};

export default toggleBurgers;
