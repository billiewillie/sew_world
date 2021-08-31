function showTextOnBlur(textContainer, bgSelector, textSelector) {
    const container = document.querySelectorAll(textContainer);


    container.forEach(item => {
        const blurBg = item.querySelector(bgSelector),
              textOnBlur = item.querySelector(textSelector);

        blurBg.classList.add('hide');
        textOnBlur.classList.add('hide');

        item.addEventListener('mouseover', ()=> {
            blurBg.classList.remove('hide');
            textOnBlur.classList.remove('hide');

            blurBg.classList.add('animation_show');
            textOnBlur.classList.add('animation_show');
        });

        item.addEventListener('mouseout', ()=> {
            blurBg.classList.add('hide');
            textOnBlur.classList.add('hide');
        });
    });
}

export default showTextOnBlur;