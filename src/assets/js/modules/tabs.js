function tabs(tabsParentSelector, tabsSelector, tabsContentSelector, activeClass) {
    const tabsParent = document.querySelectorAll(tabsParentSelector);

    tabsParent.forEach(item => {
        let tabs = item.querySelectorAll(tabsSelector),
            tabsContent = item.querySelectorAll(tabsContentSelector);

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
    })

}

export default tabs;