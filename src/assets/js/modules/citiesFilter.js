import { query } from "./queryFunctions";

const citiesFilter = (e, items, list) => {
  const text = e.target.value;
  const pat = new RegExp(text, "i");
  list.classList.add("search-mode");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const short = query(".modal-city__short-title", item);
    const full = query(".modal-city__full-title", item);

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
