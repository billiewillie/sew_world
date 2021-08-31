function tabsOneBtnReview({tabsParentSelector, articleCards, btnSelector}) {

    const tabsParent = document.querySelectorAll(tabsParentSelector);

    tabsParent.forEach(item => {
        const cards = item.querySelectorAll(articleCards),
              toggleBtn = item.querySelector(btnSelector);
        let showedCadrs = [];
        cards.forEach(card => {
            card.classList.add('hide');
        })

            for(let i = 0; i < 3; i++) {
                cards[i].classList.remove('hide');
                showedCadrs = cards[i];
            }
   

        function showCards(a, c) {
            for(let i = a; i < c; i++) {
            cards[i].classList.remove('hide');
            }
        }

        let click = 0;
        
        toggleBtn.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.add('hide');
            })

            click += 1;

                switch(click) {
                    case 1:
                        showCards(3, 6);
                        break;
                    case 2:
                        showCards(6, 9);
                        break;
                    case 3:
                        showCards(9, 12);
                        break;
                    case 4:
                        showCards(12, 15);
                        break;
                    case 5:
                        showCards(15, 18);
                        break;
                    case 6:
                        showCards(18, 21);
                        break;
                    case 7:
                        showCards(21, 24);
                        break;
                    case cards.length/3:
                        cards.forEach(card => {
                            card.classList.add('hide');
                        })
                        
                        for(let i = 0; i < 3; i++) {
                            cards[i].classList.remove('hide');
                            showedCadrs = cards[i];
                        }
                        click = 0;
                        break;
                  }
               
            item.scrollIntoView({block:"start", behavior: "smooth"});
        })

    })

}

export default tabsOneBtnReview;