const citiesFilter = (e, items, list) => {
  const text = e.target.value;
  const pat = new RegExp(text, "i");
  list.classList.add("search-mode");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const short = item.querySelector(".modal-city__short-title");
    const full = item.querySelector(".modal-city__full-title");

    if (pat.test(item.textContent.trim())) {
      item.classList.remove("hidden");
      short.classList.add("hidden");
      full.classList.add("show");
    } else {
      item.classList.add("hidden");
    }

    if (text.length === 0) {
      short.classList.remove("hidden");
      full.classList.remove("show");
      list.classList.remove("search-mode");
    }
  }
};

export default citiesFilter;
