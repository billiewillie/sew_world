function replaceText(replacedText, textString) {
    const text = document.querySelector(replacedText);

    text.textContent = textString;
}

export default replaceText;