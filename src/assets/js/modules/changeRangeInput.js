function changeRangeInput(inputSelector, valueCaunter) {
    const rangeInput = document.querySelector(inputSelector),
          rangeInputCaunter = document.querySelector(valueCaunter);

    rangeInput.addEventListener('input', () => {

        const percent = (+rangeInput.value  / (rangeInput.max - rangeInput.min)) * 100;

        rangeInput.style.background = `linear-gradient(90deg, #354895 0%, #354895 ${percent}%, #EEF2F5 ${percent}%)`;

        rangeInputCaunter.innerHTML = +rangeInput.value;
    })

}

export default changeRangeInput;