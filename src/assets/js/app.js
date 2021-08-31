'use strict';

// lazyloading for images
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import openMenu from './modules/openMenu';
import showYear from './modules/year';

// import 'slick-carousel';
// import openSubmenu from './modules/openSubmenu';
// import headerMenuMobile from './modules/headerMenuMobile';
// import modal from './modules/modal';
// import changeModal from './modules/changeModal';
// import sliderWithoutnumbers from './modules/sliderWithoutnumbers';
// import sliderWithSetings from './modules/sliderWithSetings';
// import sliderWithDots from './modules/sliderWithDots';
// import swipeToRight from './modules/swipeToRight';
// import swipeWithDots from './modules/swipeWithDots';
// import showTextOnBlur from './modules/showTextOnBlur';
// import openCommentsMobile from './modules/openCommentsMobile';
// import readMoreComments from './modules/readMoreComments';
// import checkRating from './modules/checkRating';
// import openSelectOptions from './modules/openSelectOptions';
// import changeRangeInput from './modules/changeRangeInput';
// import checkCheckbox from './modules/checkCheckbox';
// import calc from './modules/calc';
// import replaceText from './modules/replaceText';
// import openMoreWorks from './modules/openMoreWorks';
// import ourTeamTabs from './modules/ourTeamTabs';
// import fullSlider from './modules/fullSlider';
// import tabs from './modules/tabs';
// import tabsOneBtnReview from './modules/tabsOneBtnReview';
// import tabsOneBtnPortfolio from './modules/tabsOneBtnPortfolio';

// const targetBurger = document.querySelector('.target-burger');
// const nav = document.querySelector('.nav.nav-mobile');
// const main = document.querySelector('main.main');
// const footer = document.querySelector('footer');
// const body = document.querySelector('body');
const year = document.querySelector('.year');

window.addEventListener('DOMContentLoaded', () => {

    // показать актуальный год
    showYear(year);

    // открыть или закрыть меню
    // targetBurger.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     openMenu(targetBurger, nav, main, footer, body);
    // })

    //   //open heder submenu
    //   try {
    //     openSubmenu('.with_submenu', '.submenu', '.header__arrow');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // Mobile menu
    //   headerMenuMobile("[data-menuMobile]", "[data-mobileOpen]", "[data-mobileClose]", ".blur_background");

    //   // modals
    //   try {
    //     function changeValue() {
    //       const submitBtns = document.querySelectorAll('.wpcf7-submit');

    //       submitBtns.forEach(btn => {
    //         btn.getAttribute('value');

    //         btn.setAttribute('value', "Отправить заявку");
    //       })
    //     }

    //     changeValue();

    //     modal(".order_call", '[data-back_call_modal]', '[data-modalClose]');
    //     changeModal('[data-back_call_modal]', '[data-call_back_text_box]', '[data-modal_text]', '[data-submit]');

    //   } catch (e) {
    //     console.log(e);
    //   }

    //   try {
    //     // validationForm('[data-form]', '.name', '.tel', '[data-submit]');
    //     modal("[data-submit]", '[data-thanks_modal]', '[data-modalClose]');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   try {
    //     modal("[data-free_consultation_btn]", '[data-back_call_modal]', '[data-modalClose]');
    //     changeModal('[data-back_call_modal]', '[data-call_back_text_box]', '[data-modal_text]', '[data-submit]');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // home first slider
    //   try {
    //     if (window.innerWidth < 1600) {
    //       sliderWithSetings({
    //         slide: '.offer__slide',
    //         slider: "[data-slider]",
    //         prevArrow: ".offer__slider-prev",
    //         nextArrow: ".offer__slider-next",
    //         totalCounter: '#total',
    //         currentCounter: '#current',
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 700,
    //         firstSlidePar: 0,
    //         variableWidthPar: false,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     } else {
    //       sliderWithSetings({
    //         slide: '.offer__slide',
    //         slider: "[data-slider]",
    //         prevArrow: ".offer__slider-prev",
    //         nextArrow: ".offer__slider-next",
    //         totalCounter: '#total',
    //         currentCounter: '#current',
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 1500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     }

    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // swipe to right
    //   try {
    //     if (window.innerWidth < 750) {
    //       swipeToRight({
    //         slider: "[data-services]",
    //         arrowsPar: false,
    //         dotsPar: false,
    //         speedPar: 500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // portfolio preview slider
    //   try {
    //     if (window.innerWidth > 1420) {
    //       sliderWithoutnumbers({
    //         slider: "[data-portfolio_preview]",
    //         prevArrow: "[data-portfolioPrewievPrev]",
    //         nextArrow: "[data-portfolioPrewievNext]",
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 700,
    //         firstSlidePar: 0,
    //         variableWidthPar: false,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });

    //       showTextOnBlur('.slider__item__text_container', '[data-blurBg]', '[data-textOnBlur]');
    //     } else {
    //       document.querySelector('.portfolio_preview__slider').style.width = '100%';
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // open comments
    //   try {
    //     if (document.querySelector('.comments')) {
    //       readMoreComments({
    //         commentSelector: '[data-comments]',
    //         textBox: '.comments__list__item',
    //         textSelector: '[data-comments-text]',
    //         openBtn: '[data-comment_open]',
    //         closingBtn: '[data-comment_close]',
    //         openClass: 'comments__item__text_container--opened',
    //         cutLenghtDesc: 625,
    //         cutLenghtMobile: 300
    //       });
    //       openCommentsMobile();
    //     } else {
    //       readMoreComments({
    //         commentSelector: '[data-comments]',
    //         textBox: '.comments__list__item',
    //         textSelector: '[data-comments-text]',
    //         openBtn: '[data-comment_open]',
    //         closingBtn: '[data-comment_close]',
    //         openClass: 'comments__item__text_container--opened',
    //         cutLenghtDesc: 800,
    //         cutLenghtMobile: 500
    //       });
    //     }

    //     checkRating('[data-aboutCommentBox]', '.star_icon', '.rating_current', 'star_icon--checked');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // comments slider
    //   try {
    //     if (window.innerWidth > 1200) {
    //       sliderWithDots({
    //         slide: '[data-comments]',
    //         slider: ".comments__list",
    //         prevArrow: ".comments__arrow--prev",
    //         nextArrow: ".comments__arrow--next",
    //         currentCounter: '.current_number',
    //         indicatorTotalSelector: '[data-totalDots]',
    //         indicatorCurrentSelector: '[data-currentDot]',
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 700,
    //         firstSlidePar: 0,
    //         variableWidthPar: false,
    //         centerModePar: false,
    //         slidesToShowPar: 2,
    //         slidesToScrollPar: 1
    //       });
    //     } else {
    //       document.querySelector('.comments__list').style.width = '100%';
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // open select options
    //   try {
    //     openSelectOptions();
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // check checkbox
    //   try {
    //     changeRangeInput('[data-range_input]', '.area_number');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // check checkbox
    //   try {
    //     checkCheckbox('[data-checkbox_label]', '[data-checkbox]');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   //replace calc discount text
    //   try {
    //     if (window.innerWidth < 700) {
    //       replaceText('.discount_descr', 'Скидка');
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   //calc
    //   try {
    //     calc();
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   //valifation form 

    //   // try {
    //   //   validationForm('[data-formInput]');
    //   // } catch(e) {
    //   //   console.log(e);
    //   // }

    //   //open more stages_of_works
    //   try {
    //     openMoreWorks();
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   //our team tabs
    //   try {
    //     ourTeamTabs('.our_team__item', '.designer_card', 'our_team__item--current', '[data-designersNextArrow]', '[data-designersPrevArrow]', '.team_list__box', '.our_team__list_container');

    //     if (window.innerWidth < 1300) {
    //       swipeWithDots({
    //         slide: ".designer_card",
    //         slider: ".designer_cards__list",
    //         indicatorTotalSelector: '[data-teamTotalDots]',
    //         indicatorCurrentSelector: '[data-teamCurrentDot]',
    //         arrowsPar: false,
    //         dotsPar: false,
    //         speedPar: 500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 2,
    //         slidesToScrollPar: 1
    //       });
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   //packages of services
    //   try {
    //     function showBtnOnPackage(packageElement, btn) {
    //       const packageBox = document.querySelectorAll(packageElement);

    //       packageBox.forEach(packageItem => {
    //         const showedBtn = packageItem.querySelector(btn);

    //         packageItem.addEventListener('mouseover', () => {
    //           showedBtn.classList.add('show');
    //         });

    //         packageItem.addEventListener('mouseout', () => {
    //           showedBtn.classList.remove('show');
    //         });

    //       })
    //     };

    //     showBtnOnPackage('[data-package]', '[data-packageBtn]');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // portfolio slider

    //   try {
    //     tabs('.portfolio_main', '[data-tabs]', '[data-tabs_content]', 'portfolio__tab_btn--active');
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   try {
    //     if (window.innerWidth > 400) {
    //       fullSlider({
    //         slide: "[design_project_tab_slide]",
    //         slider: "[data-design_project_tab_Field]",
    //         prevArrow: "[data-design_project_tab_prev]",
    //         nextArrow: "[data-design_project_tab_next]",
    //         currentDot: ".count",
    //         mainContainerSelector: "[data-design_project_tab]",
    //         sliderBoxSelector: ".design_project__tab",
    //         slideItemSelector: ".wrapper_item__grid_container",
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });

    //       showTextOnBlur('.wrapper_full__img_container', '[data-blurBg]', '[data-textOnBlur]');
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   try {
    //     if (window.innerWidth > 400) {
    //       fullSlider({
    //         slide: "[design_maked_repair_slide]",
    //         slider: "[data-maked_repair_tab_Field]",
    //         prevArrow: "[data-design_maked_repair_prev]",
    //         nextArrow: "[data-design_maked_repair_next]",
    //         currentDot: ".maked_repair__count",
    //         mainContainerSelector: "[data-maked_repair_tab]",
    //         sliderBoxSelector: ".maked_repair__tab",
    //         slideItemSelector: ".wrapper_full_item--portfolio",
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }


    //   try {
    //     if (window.innerWidth < 400) {
    //       tabsOneBtnPortfolio({
    //         tabsParentSelector: '.design_project__tab',
    //         articleCards: '[data-portfolioSlide]',
    //         btnSelector: '.portfolio__see_mor_btn'
    //       });

    //       tabsOneBtnPortfolio({
    //         tabsParentSelector: '.maked_repair__tab',
    //         articleCards: '[data-portfolioSlide]',
    //         btnSelector: '.portfolio__see_mor_btn',
    //       });
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   // portfolio ptoject template

    //   try {
    //     readMoreComments({
    //       commentSelector: '.portfolio_project',
    //       textBox: '.portfolio_project__text',
    //       textSelector: '[data-cut_portf_text]',
    //       openBtn: '[data-comment_open]',
    //       closingBtn: '[data-comment_close]',
    //       openClass: 'show',
    //       cutLenghtDesc: 2000,
    //       cutLenghtMobile: 310
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   try {
    //     if (window.innerWidth > 1200) {
    //       sliderWithoutnumbers({
    //         slider: ".similar_projects__slider",
    //         prevArrow: "[data-similarPrevArrow]",
    //         nextArrow: "[data-similarNextArrow]",
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 700,
    //         firstSlidePar: 0,
    //         variableWidthPar: false,
    //         centerModePar: false,
    //         slidesToShowPar: 4,
    //         slidesToScrollPar: 4
    //       });
    //     } else {
    //       swipeToRight({
    //         slider: ".similar_projects__slider",
    //         arrowsPar: false,
    //         dotsPar: false,
    //         speedPar: 500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }


    //   // review 
    //   try {
    //     if (window.innerWidth > 400) {
    //       fullSlider({
    //         slide: "[data-reviewSlide]",
    //         slider: "[data-reviewField]",
    //         prevArrow: "[data-reviewPrev]",
    //         nextArrow: "[data-reviewNext]",
    //         currentDot: ".count",
    //         mainContainerSelector: ".review_main",
    //         sliderBoxSelector: ".wrapper_full__container",
    //         slideItemSelector: ".reviewSlide",
    //         arrowsPar: true,
    //         dotsPar: false,
    //         speedPar: 500,
    //         firstSlidePar: 0,
    //         variableWidthPar: true,
    //         centerModePar: false,
    //         slidesToShowPar: 1,
    //         slidesToScrollPar: 1
    //       });
    //     } else {
    //       tabsOneBtnReview({
    //         tabsParentSelector: '.reviews__main_container',
    //         articleCards: '[data-comments]',
    //         btnSelector: '.portfolio__see_mor_btn',
    //       });
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }

    //   const telInput = document.querySelector(".calc-tel input");
    //   const yourTelInput = document.querySelector(".your-tel input");
    //   const im = new Inputmask("+7 (999) 999-9999");
    //   im.mask(telInput);
    //   im.mask(yourTelInput);

    });