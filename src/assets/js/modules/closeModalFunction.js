const closeModalFunction = (
  asideModal,
  main,
  footer,
  dummyCover,
  wrapper,
  isOpenCatalog,
  modalInnerWrap
) => {
  asideModal.classList.remove("show");
  main.classList.remove("hidden-by-mobile-catalog");
  footer.classList.remove("hidden-by-mobile-catalog");
  dummyCover.classList.remove("show", "show-for-catalog");
  wrapper.classList.remove("opened-mobile-menu");
  isOpenCatalog = false;
  setTimeout(() => {
    modalInnerWrap.forEach((el) => {
      el.classList.remove("show");
    });
  }, 300);
};

export default closeModalFunction;
