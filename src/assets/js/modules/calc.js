function calc() {

    class Calculator {
        constructor() {
            this.consult = false;
            this.style = '';
            this.package = '';
            this.renovation = true;
            this.square = 62;
            this.sum = 0;
        }

        setPackage(value) {
            this.package = value;
        }

        setStyle(value) {
            this.style = value;
        }

        setSquarePlus() {
            if(this.square === 500) return false
            this.square = this.square + 1;
        }

        setSquareMinus() {
            if(this.square === 0) return false
            this.square = this.square - 1;
        }

        setSquare(value) {
            this.square = Number(value);
        }

        setSum() {
            let packagePrice = 0;
            let consultPrice = 0;
            let renovationDiscount = 1;
            switch (this.getPackage()) {
                case 'standart':
                    packagePrice = 2500;
                    break;
                case 'premium':
                    packagePrice = 3000;
                    break;
            }
            if (this.getConsult() === true) consultPrice = 5000;
            if (this.getRenovation() === true) renovationDiscount = 0.95;
            this.sum = (packagePrice * this.getSquare() + consultPrice) * renovationDiscount
        }

        setConsult(value) {
            this.consult = value;
        }

        setRenovation(value) {
            this.renovation = value;
        }

        getPackage() {
            return this.package;
        }

        getStyle() {
            return this.style;
        }

        getSquare() {
            return this.square;
        }

        getConsult() {
            return this.consult;
        }

        getRenovation() {
            return this.renovation;
        }

        getSum() {
            return this.sum;
        }
    }

    const calculator = new Calculator();
    const selectPackage = document.querySelector('#package');
    const selectStyle = document.querySelector('#style');
    const selectSquare = document.querySelector('#square');
    const squareValueShow = document.querySelector('.value__square');
    const squareValueMask = document.querySelector('.square_value--mask');
    const consult = document.querySelector('#consult');
    const renovation = document.querySelector('#renovation');
    const sumValueShow = document.querySelector('.sum');
    const plusSquare = document.querySelector('.square_plus');
    const minusSquare = document.querySelector('.square_minus');
    const additionalInfoButton = document.querySelector('.additional_info-button'); 
    const additionalInfo = document.querySelector('.additional_info');
    const inputData = document.querySelector('.input_data');

    additionalInfoButton.addEventListener('click', (e) => {
        additionalInfoButton.classList.toggle('clicked');
        additionalInfo.classList.toggle('hide');
    });

    const showSum = () => {
        calculator.setSum();
        const sum = new Intl.NumberFormat('ru-RU').format(calculator.getSum());
        const tarif = calculator.getPackage();
        const square = calculator.getSquare();
        const style = calculator.getStyle();
        const consult = calculator.getConsult();
        const renovation = calculator.getRenovation();
        sumValueShow.textContent = `${sum}`;
        const content = `сумма: ${sum} рублей, тариф: ${tarif}, площадь: ${square} м2, стиль: ${style}, консультация: ${consult === true ? 'да' : "нет"}, ремонт у нас: ${renovation === true ? 'да' : "нет"}`;
        inputData.setAttribute('value', content);
    }

    selectPackage.addEventListener('click', () => {
        let value;
        const activeValue = selectPackage.querySelector('.same-as-selected').textContent;
        switch (activeValue) {
            case 'стандарт':
                value = 'standart'
                break;
            case 'премиум':
                value = 'premium'
                break;
        }
        calculator.setPackage(value);
        showSum();
    })

    selectStyle.addEventListener('click', () => {
        let value;
        const activeValue = selectStyle.querySelector('.same-as-selected').textContent;
        switch (activeValue) {
            case 'модерн':
                value = 'модерн'
                break;
            case 'лофт':
                value = 'лофт'
                break;
            case 'минимализм':
                value = 'минимализм'
                break;
            case 'экостиль':
                value = 'экостиль'
                break;
            case 'арт-нуво':
                value = 'арт-нуво'
                break;
            case 'классический':
                value = 'классический'
                break;
            case 'другой':
                value = 'другой'
                break;
        }
        calculator.setStyle(value);
        showSum();
    })

    selectSquare.addEventListener('input', (e) => {
        calculator.setSquare(e.target.value);
        squareValueShow.textContent = calculator.getSquare();
        const percent = (calculator.getSquare() / 500) * 100;
        squareValueMask.textContent = `${calculator.getSquare()} м2`
        selectSquare.style.background = `linear-gradient(90deg, #354895 0%, #354895 ${percent}%, #EEF2F5 ${percent}%)`;
        showSum();
    })

    squareValueMask.addEventListener('click', (e) => {
        squareValueMask.classList.add('hide')
        squareValueShow.focus()
    })

    squareValueShow.addEventListener('focusout', (e) => {
        squareValueMask.classList.toggle('hide');
    })

    $(document).keypress(
        function(event){
            if (event.which == '13') {
                event.preventDefault();
            }
    });

    plusSquare.addEventListener('click', (e) => {
        calculator.setSquarePlus();
        const percent = (calculator.getSquare() / 500) * 100;
        selectSquare.setAttribute('value', `${calculator.getSquare()}`)
        squareValueMask.textContent = `${calculator.getSquare()} м2`;
        selectSquare.style.background = `linear-gradient(90deg, #354895 0%, #354895 ${percent}%, #EEF2F5 ${percent}%)`;
        showSum();
    })

    minusSquare.addEventListener('click', (e) => {
        calculator.setSquareMinus();
        const percent = (calculator.getSquare() / 500) * 100;
        selectSquare.setAttribute('value', `${calculator.getSquare()}`);
        squareValueMask.textContent = `${calculator.getSquare()} м2`;
        selectSquare.style.background = `linear-gradient(90deg, #354895 0%, #354895 ${percent}%, #EEF2F5 ${percent}%)`;
        showSum();
    })

    consult.addEventListener('click', () => {
        const checkbox = consult.querySelector('.checkbox');
        switch (checkbox.getAttribute('aria-checked')) {
            case "true":
                checkbox.setAttribute('aria-checked', "true");
                calculator.setConsult(true);
                showSum();
                break;
            case "false":
                checkbox.setAttribute('aria-checked', "false");
                calculator.setConsult(false);
                showSum();
                break;
        }

    })

    renovation.addEventListener('click', () => {
        const checkbox = renovation.querySelector('.checkbox');
        switch (checkbox.getAttribute('aria-checked')) {
            case "true":
                checkbox.setAttribute('aria-checked', "true");
                calculator.setRenovation(true);
                showSum();
                break;
            case "false":
                checkbox.setAttribute('aria-checked', "false");
                calculator.setRenovation(false);
                showSum();
                break;
        }
    })

    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                    calculator.setSquare(this.oldValue);
                    squareValueMask.textContent = `${this.oldValue} м2`;
                    const percent = (calculator.getSquare() / 500) * 100;
                    selectSquare.setAttribute('value', `${calculator.getSquare()}`);
                    selectSquare.style.background = `linear-gradient(90deg, #354895 0%, #354895 ${percent}%, #EEF2F5 ${percent}%)`;
                    if(this.oldSelectionStart === 0) {
                        calculator.setSquare(this.oldSelectionStart);
                        squareValueMask.textContent = `${this.oldSelectionStart} м2`;
                    }
                    showSum();
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    console.log(this.value);
                    this.value = "";
                }
            });
        });
    }

    setInputFilter(squareValueShow, (val) => /^\d*$/.test(val) && (val === "" || parseInt(val) <= 500));

    var x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    l = x.length;

    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML === this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt === y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);

    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.querySelector('.select-selected').textContent = 'Выберите тариф';
        document.querySelector('.checkbox_label#consult .label__text').textContent = 'Консультация дизайнера';
    } 

}

export default calc;