function tabsOneBtnPortfolio({tabsParentSelector, articleCards, btnSelector}) {

    const tabsParent = document.querySelectorAll(tabsParentSelector);

    tabsParent.forEach(item => {
        const cards = item.querySelectorAll(articleCards),
              toggleBtn = item.querySelector(btnSelector);
        let click = 0;

        cards.forEach(card => {
            card.classList.add('hide');
        })

        cards[1].classList.remove('hide');
        
        toggleBtn.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.add('hide');
            })

            click += 1;

            if(item.classList.contains('design_project__tab')) {
                switch(click) {
                    case 1:
                        cards[0].classList.remove('hide');
                        break;
                    case 2:
                        cards[1].classList.remove('hide');
                        break;
                    case 3:
                        cards[2].classList.remove('hide');
                        break;
                    case cards.length:
                        cards.forEach(card => {
                            card.classList.add('hide');
                        })
                        cards[1].classList.remove('hide');
                        click = 0;
                        break;
                  }
            } else {
                switch(click) {
                    case 1:
                        cards[0].classList.remove('hide');
                        break;
                    case 2:
                        cards[1].classList.remove('hide');
                        break;
                    case cards.length:
                        cards.forEach(card => {
                            card.classList.add('hide');
                        })
                        cards[1].classList.remove('hide');
                        click = 0;
                        break;
                  }
            }

                
               
            item.scrollIntoView({block:"start", behavior: "smooth"});
        })

    })

}

export default tabsOneBtnPortfolio;