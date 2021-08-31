export default (targetBurger, nav, main, footer, body) => {
  targetBurger.classList.toggle('toggled');
  nav.classList.toggle('toggled');
  main.classList.toggle('blur');
  footer.classList.toggle('blur');
  body.classList.toggle('stop-scrolling');
}