import {closeModal} from './modal';

function changeModal(callBackModalSelector, callBackModalBox, thanksModalTextBlok, callBackBtn) {
    const callBackModal = document.querySelectorAll(callBackModalSelector),
          thanksModaltext = document.querySelector(thanksModalTextBlok);

    
    callBackModal.forEach(item => {
        const callBackSubmit = item.querySelector(callBackBtn),
              callBackModalMain = item.querySelector(callBackModalBox);

        callBackSubmit.addEventListener('click', (e) => {
            e.preventDefault();

            // const newThanks = document.createElement('div');

            callBackModalMain.classList.add('thanks_showing_padding');

            callBackModalMain.innerHTML = thanksModaltext.innerHTML;
            
            setTimeout(() => closeModal(callBackModalSelector), 3000);
           
        })

    })
          
}

export default changeModal;
