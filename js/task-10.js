function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodySelect = document.querySelector('body');

const containerBox = bodySelect.children[2];
const inputController = bodySelect.children[1].children[0];
const buttonCreate = bodySelect.children[1].children[1];
const buttonDestroy = bodySelect.children[1].children[2];

buttonCreate.addEventListener("click", () => {
  const quantityBoxes = Number(inputController.value);
  let stringToPush = ''

  for (let i = 0; i < quantityBoxes; i += 1){
    const color = getRandomHexColor();
    const boxSize = 30 + 10 * i;
    
    stringToPush += `<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color:${color};"></div>`
  }
  containerBox.innerHTML = stringToPush
})



buttonDestroy.addEventListener("click", () => {
  containerBox.innerHTML = "";
})