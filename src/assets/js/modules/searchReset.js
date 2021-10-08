const searchReset = (searchForm, searchResults, inputSearch, dummyCover) => {
  searchForm.classList.remove("show");
  searchResults.classList.remove("show");
  inputSearch.value = "";
  dummyCover.classList.remove("show", "show-for-catalog");
};

export default searchReset;
