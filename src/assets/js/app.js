"use strict";

// imports
import { query, queryAll } from "./modules/queryFunctions";
import common from "./modules/common";
import setYoutubeModal from "./modules/setYoutubeModal";
import indexFunction from "./modules/indexFunction";

import MicroModal from "micromodal";
import FormValidator from "@yaireo/validator";

// varibles
const consultForm = query("#consult-form");
const subscribeForm = query("#subscribe-form");
const modalCallForm = query("#modal-call-form");
const modalQuestionForm = query("#modal-question-form");
const modalLoginForm = query("#modal-login-form");
const modalLoginCodeForm = query("#modal-login-form-code");
const asideModalWelcomeMessage = query(".aside-modal-welcome-message");
const youTubeItems = queryAll(".youtube-item");

common();

window.addEventListener("DOMContentLoaded", () => {
  indexFunction();

  youTubeItems.forEach((item) => setYoutubeModal(item, "#modal-1-content"));
});

[(subscribeForm, consultForm)].forEach((item) => {
  if (!item) return;
  const validatorConsult = new FormValidator(
    {
      events: ["blur", "paste", "change"],
      texts: {
        empty: "необходимо ввести значение",
        invalid: "неправильное значение",
        short: "слишком короткое значение",
        long: "слишком длинное значение",
        email: "email введен неправильно",
        number_min: "номер короткий",
        number_max: "номер слишком длинный",
        checked: "нужно ваше согласие",
      },
    },
    item
  );

  item.addEventListener("submit", (e) => {
    e.preventDefault();
    const submit = true;
    const validatorResult = validatorConsult.checkAll(item);
    if (validatorResult.valid) {
      MicroModal.show("modal-success-form");
      item.reset();
    }
    return !!validatorResult.valid;
  });
});

[modalQuestionForm, modalCallForm].forEach((item) => {
  if (!item) return;
  const validatorConsult = new FormValidator(
    {
      events: ["blur", "paste", "change"],
      texts: {
        empty: "необходимо ввести значение",
        invalid: "неправильное значение",
        short: "слишком короткое значение",
        long: "слишком длинное значение",
        email: "email введен неправильно",
        number_min: "номер короткий",
        number_max: "номер слишком длинный",
        checked: "нужно ваше согласие",
      },
    },
    item
  );

  item.addEventListener("submit", (e) => {
    e.preventDefault();
    // const submit = true;
    const validatorResult = validatorConsult.checkAll(item);
    if (validatorResult.valid) {
      const parent = item.closest(".modal-inner-wrap");
      parent.querySelector(".aside-modal__title").textContent =
        "Ваша заявка успешно отправлена";
      parent.querySelector(".aside-modal__subtitle").textContent =
        "Мы перезвоним вам в ближайшее время";
      item.remove();
    }
    return !!validatorResult.valid;
  });
});

const modalLoginFormValidator = new FormValidator(
  {
    events: ["blur", "paste", "change"],
    texts: {
      empty: "необходимо ввести значение",
      invalid: "неправильное значение",
      short: "слишком короткое значение",
      long: "слишком длинное значение",
      email: "email введен неправильно",
      number_min: "номер короткий",
      number_max: "номер слишком длинный",
      checked: "нужно ваше согласие",
      smsCode: "неправильный код",
    },
  },
  modalLoginForm
);

modalLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const validatorResult = modalLoginFormValidator.checkAll(modalLoginForm);
  if (validatorResult.valid) {
    modalLoginForm.classList.add("hidden");
    modalLoginCodeForm.classList.remove("hidden");
  }
  return !!validatorResult.valid;
});

const modalLoginCodeFormValidator = new FormValidator(
  {
    events: ["blur", "paste", "change"],
    texts: {
      empty: "необходимо ввести значение",
      invalid: "неправильное значение",
      short: "слишком короткое значение",
      long: "слишком длинное значение",
      email: "email введен неправильно",
      number_min: "номер короткий",
      number_max: "номер слишком длинный",
      checked: "нужно ваше согласие",
      smsCode: "неправильный код",
    },
    regex: {
      myCustomRegex: "1111",
    },
  },
  modalLoginCodeForm
);

modalLoginCodeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const validatorResult =
    modalLoginCodeFormValidator.checkAll(modalLoginCodeForm);
  if (validatorResult.valid) {
    modalLoginCodeForm.classList.add("hidden");
    asideModalWelcomeMessage.classList.remove("hidden");
    const parent = modalLoginCodeForm.closest(".modal-inner-wrap");
    parent.querySelector(".aside-modal__title").textContent =
      "Добро пожаловать в личный кабинет";
  }
  return !!validatorResult.valid;
});
