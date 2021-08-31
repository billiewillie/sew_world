function validationForm(formSelector, inputNameSelectors, inputTelSelectors, submitBtnSelector) {
    const form = document.querySelectorAll(formSelector);

    console.log(form);

    form.forEach(item => {
        const inputText = item.querySelector(inputNameSelectors),
              inputNumber = item.querySelector(inputTelSelectors),
              submitBtn = item.querySelector(submitBtnSelector);

              submitBtn.getAt

              const errorMessage = document.createElement('div');

              errorMessage.innerHTML = "I expect an e-mail, darling!";

              inputNumber.addEventListener("input", function (event) {
                // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
                 // является ли корректным поле электронной почты.
                if (inputNumber.validity.valid) {
                  // В случае появления сообщения об ошибке, если поле
                  // является корректным, мы удаляем сообщение об ошибке.
                  errorMessage.classList.add('hide');
                }
               }, false);

               item.addEventListener("submit", function (event) {
                 // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
                  // валидность поля электронной почты.
                 if (!inputNumber.validity.valid) {
               
                    form.insertBefore(errorMessage, inputNumber);

                    errorMessage.classList.remove('hide');
                  
                   // И мы предотвращаем отправку формы путём отмены события
                   event.preventDefault();
                 }
               }, false);


            //   submitBtn.addEventListener('click', () => {
                  
            //     submitBtn.getAttribute('disabled');
            //     submitBtn.setAttribute('disabled');

            //     inputText.forEach(item => {
            //         item.addEventListener('input', () => {
        
            //             console.log(item.value);

                       
                
            //             if(item.value.match(/\W/g)) {
            //                 item.style.border = '1px solid red';
                            
                            
            //             } else {
            //                 item.style.border = 'none';

            //                 submitBtn.removeAttribute('disabled');
            //             }
            //         });
            //     }) 
        
            //     inputNumber.forEach(item => {
            //         item.addEventListener('input', () => {
        
            //             console.log(item.value);
                
            //             // if(input.value.match(null || " " ) {
            //             //     input.style.border = '1px solid red';
            //             // } else {
            //             //     input.style.border = 'none';
            //             // }
            //         });
            //     }) 
  

       
    });
          


    
    

    


}

export default validationForm;