const inputChangeableController = document.querySelector('#font-size-control')
const textToChange = document.querySelector("#text")

inputChangeableController.addEventListener('input', () => {
    textToChange.style.fontSize = `${inputChangeableController.value}px`
})