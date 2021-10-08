const dummyCoverClick = (
  asideModal,
  headerCatalog,
  dummyCover,
  burgers,
  isOpenCatalog,
  modalInnerWrap
) => {
  asideModal.classList.remove("show");
  headerCatalog.classList.remove("show");
  dummyCover.classList.remove("show", "show-for-catalog");
  burgers.forEach((burger) => burger.classList.remove("toggled"));
  isOpenCatalog = false;
  setTimeout(() => {
    modalInnerWrap.forEach((el) => {
      el.classList.remove("show");
    });
  }, 300);
};

export default dummyCoverClick;
