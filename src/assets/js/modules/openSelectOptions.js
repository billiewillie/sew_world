
function openSelectOptions() {
    const selectBox = document.querySelectorAll('[data-selectBox]');

    selectBox.forEach(item => {
        const closedBtn = item.querySelector('[data-down]'),
              openedBtn = item.querySelector('[data-up]'),
              selectInput = item.querySelector('[data-selectInput]'),
              selectOptions = item.querySelector('[data-selectOptions]'),
              selectOption = item.querySelectorAll('[data-selectOption]');

        selectInput.addEventListener('click', (e)=> {
                e.preventDefault();

                openOptions(selectOptions, closedBtn, openedBtn, 'hide');
            });

        closedBtn.addEventListener('click', (e) => { 
            e.preventDefault();

            openOptions(selectOptions, closedBtn, openedBtn, 'hide');
        });

            selectOption.forEach(option => {
                let optionText = option.querySelector('[data-selectOptionText]');

                option.addEventListener('click', (e) => {
                
                    selectInput.value = optionText.innerHTML;

                    selectOptions.classList.add('hide');

                    closedBtn.classList.remove('hide');
                    openedBtn.classList.add('hide');
                });
        });
    });

    function openOptions(menuSelector, btnClose, btnOpen, hiddenClass) {
        menuSelector.classList.remove(hiddenClass);

        btnClose.classList.add(hiddenClass);
        btnOpen.classList.remove(hiddenClass);
    }    
    
}

export default openSelectOptions;
