function checkCheckbox(checkboxesLabel, checkboxSelector) {
    const checkboxArea = document.querySelectorAll(checkboxesLabel);

    checkboxArea.forEach(item => {
        const checkbox = item.querySelector(checkboxSelector);
        item.addEventListener("click", function (evt) { 
          evt.preventDefault();
          checkbox.getAttribute('aria-checked');
          switch(checkbox.getAttribute('aria-checked')) {
            case "true":
                checkbox.setAttribute('aria-checked', "false");
                break;
            case "false":
                checkbox.setAttribute('aria-checked', "true");
                break;
          }
        });
    }); 
}

export default checkCheckbox;