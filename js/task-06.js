const textInputValidation = document.querySelector("#validation-input");



textInputValidation.addEventListener("blur", () => {
    if ((textInputValidation.value.length < Number(textInputValidation.attributes[2].value)||(textInputValidation.value.length > Number(textInputValidation.attributes[2].value)))) {
        textInputValidation.classList.add('invalid');
        textInputValidation.classList.remove('valid');
    }
    else {
        textInputValidation.classList.add('valid');
        textInputValidation.classList.remove('invalid');
    }
})