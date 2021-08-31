function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';  
}

function modal(triggetSelector, modalSelector, modalCloseSelector) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggetSelector),
          modal = document.querySelector(modalSelector),
          closeBtn = document.querySelectorAll(modalCloseSelector);


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalSelector);

            if(modal.hasAttribute('data-thanks_modal')) {
                setTimeout(() => closeModal(modalSelector), 3000);
            }
        });
         
    });

    closeBtn.forEach(btnClose => {
        btnClose.addEventListener('click', () => {
            closeModal(modalSelector);      
        })
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });
    
}

export default modal;
export {closeModal, openModal};