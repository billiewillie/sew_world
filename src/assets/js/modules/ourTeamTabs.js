
function ourTeamTabs(tabsSelector, tabsContentSelector, activeClass, toDownArrSelector, toUpArrSelector, scrollingSelector, hiddenBox) {
    // Tabs
    let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector), 
    transparentedDiv = document.querySelector('.transparented'), 
    toDownArr = document.querySelector(toDownArrSelector),
    toUpArr = document.querySelector(toUpArrSelector),
    scrollingBox = document.querySelector(scrollingSelector),
    hidden = document.querySelector(hiddenBox),
    tabHeight = tabs[0].scrollHeight;

    if(window.innerWidth > 1300) {
       
        let offset = 0,
            id=0; 

        function hideTabContent() {
            
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });

            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();


        tabs.forEach((item, i) => {
            item.addEventListener('click', ()=> {
                hideTabContent();
                showTabContent(i);
            })  
        });

        toDownArr.addEventListener('click', ()=> {
            if(offset == tabHeight * (tabs.length-1)) {
                offset = 0;
                id = 0;
                scrollingBox.scrollTo({top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                offset += tabHeight;
                id++;
            }

            transparentedDiv.style.transform = `translateY(-${offset}px)`;

            if(id === 3) {
                scrollingBox.scrollTo({top: tabs[id].offsetTop,
                        left: 0,
                        behavior: 'smooth'
                    });
            }

            hideTabContent();
            showTabContent(id);
        })

        toUpArr.addEventListener('click', ()=> {
            if(offset == 0) {
                offset = tabHeight * (tabs.length-1);
                id = tabs.length-1;
                scrollingBox.scrollTo({top: tabs[id].offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                offset -= tabHeight;
                id--;
            }

            transparentedDiv.style.transform = `translateY(-${offset}px)`;

            hideTabContent();
            showTabContent(id);

            if(id === 1) {
                scrollingBox.scrollTo({top: -tabs[id].offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }) 
      
      } else {
        hidden.classList.add('hide');
      }            
}

export default ourTeamTabs;