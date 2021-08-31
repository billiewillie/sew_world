function openMoreWorks() {
    const stageItem = document.querySelectorAll('[data-stage]'),
          showMoreBtn = document.querySelector('[data-show_more_works]'),
          showMoreBtnText = document.querySelector('.show_more_works__text'),
          showMoreBtnArrowToDown = document.querySelector('[data-btn_arrow_to_down]'),
          showMoreBtnArrowToup = document.querySelector('[data-btn_arrow_to_up]');

    if(window.innerWidth < 470) {
        stageItem[4].classList.add('hide');
        stageItem[5].classList.add('hide');
        stageItem[6].classList.add('hide');
        stageItem[7].classList.add('hide');

        showMoreBtn.addEventListener('click', ()=> {
            stageItem[4].classList.toggle('hide');
            stageItem[5].classList.toggle('hide'); 
            stageItem[6].classList.toggle('hide');
            stageItem[7].classList.toggle('hide'); 

            showMoreBtnText.classList.toggle('hide'); 
            showMoreBtnArrowToDown.classList.toggle('hide'); 
            showMoreBtnArrowToup.classList.toggle('hide'); 
        });
    } else {
        stageItem[4].classList.remove('hide');
        stageItem[5].classList.remove('hide');
        stageItem[6].classList.remove('hide');
        stageItem[7].classList.remove('hide');
    }
}

export default openMoreWorks;