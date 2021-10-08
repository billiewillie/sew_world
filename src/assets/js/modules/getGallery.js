import { query } from "./queryFunctions";

const getGallery = (tabs) => {
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const data = tab.dataset.gallery;
      const active = query(".gallery-section__active");
      const activeTab = query(".gallery-tab__active");
      const selected = document.getElementById(data);
      active.classList.remove("gallery-section__active");
      activeTab.classList.remove("gallery-tab__active");
      selected.classList.add("gallery-section__active");
      e.target.closest(".gallery-tab").classList.add("gallery-tab__active");
    });
  });
};

export default getGallery;
