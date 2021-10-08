const iconSearchFunction = (
  searchForm,
  dummyCover,
  inputSearch,
  headerCatalog,
  mobileCatalog
) => {
  searchForm.classList.add("show");
  dummyCover.classList.add("show-for-catalog");
  inputSearch.focus();
  headerCatalog.classList.remove("show");
  mobileCatalog.classList.remove("show");
};

export default iconSearchFunction;
