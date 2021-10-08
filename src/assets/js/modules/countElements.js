import { query } from "./queryFunctions";

const countElements = (
  array,
  goodsInBucket,
  likedGoods,
  goodsToMatch,
  headerBucket,
  headerLiked,
  headerMatched
) => {
  array.forEach((item) => {
    const id = Number(item.dataset.id);
    const button = query("button", item);
    const like = query(".card-icons__like", item);
    const match = query(".card-icons__match", item);
    const buttonText1 = "в корзину";
    const buttonText2 = "товар в корзине";

    if (button) {
      button.addEventListener("click", () => {
        if (!goodsInBucket.includes(id)) {
          goodsInBucket.push(id);
          item.classList.add("card_in-bucket");
          button.textContent = buttonText2;
        } else {
          goodsInBucket = goodsInBucket.filter((el) => el !== id);
          item.classList.remove("card_in-bucket");
          button.textContent = buttonText1;
        }

        const length = goodsInBucket.length;
        const amount = query(".header-icons__amount", headerBucket);
        headerBucket.dataset.bucket = length;

        if (length > 0) {
          headerBucket.classList.add("header-icons__item_highlighted");
        } else {
          headerBucket.classList.remove("header-icons__item_highlighted");
        }
        amount.textContent = length;
      });
    }

    if (like) {
      like.addEventListener("click", () => {
        if (!likedGoods.includes(id)) {
          likedGoods.push(id);
          like.classList.add("card-icons_clicked");
          item.setAttribute("data-liked", "true");
        } else {
          likedGoods = likedGoods.filter((el) => el !== id);
          like.classList.remove("card-icons_clicked");
          item.setAttribute("data-liked", "false");
        }

        const length = likedGoods.length;
        const amount = query(".header-icons__amount", headerLiked);
        headerLiked.dataset.liked = length;

        if (length > 0) {
          headerLiked.classList.add("header-icons__item_highlighted");
        } else {
          headerLiked.classList.remove("header-icons__item_highlighted");
        }
        amount.textContent = length;
      });
    }

    match.addEventListener("click", () => {
      if (!goodsToMatch.includes(id)) {
        goodsToMatch.push(id);
        match.classList.add("card-icons_clicked");
        item.setAttribute("data-match", "true");
      } else {
        goodsToMatch = goodsToMatch.filter((el) => el !== id);
        match.classList.remove("card-icons_clicked");
        item.setAttribute("data-match", "false");
      }

      console.log(item);

      const length = goodsToMatch.length;
      const amount = query(".header-icons__amount", headerMatched);
      headerMatched.dataset.match = length;

      if (length > 0) {
        headerMatched.classList.add("header-icons__item_highlighted");
      } else {
        headerMatched.classList.remove("header-icons__item_highlighted");
      }
      amount.textContent = length;
    });
  });
};

export default countElements;
