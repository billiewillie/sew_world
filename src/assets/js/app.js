'use strict';

import toggleBurgers from './modules/toggleBurger';

const burgers = document.querySelectorAll('.burger');

window.addEventListener('DOMContentLoaded', () => {

  toggleBurgers(burgers);

});