function openSubmenu(mainMenuBtn, subMenuElement, arrowElement) {
    const nav = document.querySelector('[data-header_nav]'),
        mainMenuItem = nav.querySelector(mainMenuBtn),
        submenu = nav.querySelector(subMenuElement),
        arrow = nav.querySelector(arrowElement);

    mainMenuItem.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('show');
        arrow.classList.toggle('header__arrow_up');
    })

    document.addEventListener('click', (e) => {
        if(!e.target.classList.contains('nav__item__link')) {
            submenu.classList.remove('show')
            arrow.classList.remove('header__arrow_up');
        }
    })

}



export default openSubmenu;