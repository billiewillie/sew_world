import { queryAll } from "./queryFunctions";

const buttons = queryAll(".button-opener");

const footerAccordion = () => {
  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("hide");
    });
  });
};

export default footerAccordion;
