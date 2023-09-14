const inputChangeableController = document.querySelector('#font-size-control')
const textToChange = document.querySelector("#text")

textToChange.style.fontSize = `${inputChangeableController.value}px`;

inputChangeableController.addEventListener('input', () => {
    textToChange.style.fontSize = `${inputChangeableController.value}px`
})