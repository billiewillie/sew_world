import { queryAll } from "./queryFunctions";

const setBannerWidth = (banner, headerCatalogSubcategoriesItem) => {
  if (banner) {
    const subcategories = Array.from(
      queryAll(".header-subcategories__column", headerCatalogSubcategoriesItem)
    );
    const elWidth = subcategories.reduce((acc, category) => {
      return acc + category.getBoundingClientRect().width;
    }, 0);
    banner.style.width = `${elWidth}px`;
  }
};

export default setBannerWidth;
