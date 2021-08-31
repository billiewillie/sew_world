function readMoreComments({commentSelector, textBox, textSelector,openBtn, closingBtn, openClass, cutLenghtDesc, cutLenghtMobile}) {
    const comment = document.querySelectorAll(commentSelector);

    comment.forEach(item => {
        const textContainer = item.querySelector(textBox),
              text = item.querySelector(textSelector),
              readMoreBtn = item.querySelector(openBtn),
              closeBtn = item.querySelector(closingBtn);

        let fullText = text.innerHTML;     

        if(window.innerWidth > 768) {
            if(text.innerHTML.length > cutLenghtDesc) {
                text.innerHTML = `${text.innerHTML.substring(0, cutLenghtDesc)}... `;
            } 
        } else {
            if(text.innerHTML.length > cutLenghtMobile) {
                text.innerHTML = `${text.innerHTML.substring(0, cutLenghtMobile)}... `;
            } 
        }

        readMoreBtn.addEventListener('click', ()=> {
            text.innerHTML = fullText;
            textContainer.classList.add(openClass);
            readMoreBtn.classList.add('hide');
            closeBtn.classList.remove('hide');
        });

        closeBtn.addEventListener('click', ()=> {
            if(window.innerWidth > 768) {
                if(text.innerHTML.length > cutLenghtDesc) {
                    text.innerHTML = `${text.innerHTML.substring(0, cutLenghtDesc)}... `;
                } 
            } else {
                if(text.innerHTML.length > cutLenghtMobile) {
                    text.innerHTML = `${text.innerHTML.substring(0, cutLenghtMobile)}... `;
                } 
            }
            textContainer.classList.remove(openClass);
            closeBtn.classList.add('hide');
            readMoreBtn.classList.remove('hide');

            if(window.innerWidth < 1000) {
                textContainer.scrollIntoView({block:"start", behavior: "smooth"});
            }
        });

    });
}

export default readMoreComments;