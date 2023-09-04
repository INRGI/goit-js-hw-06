function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodySelect = document.querySelector('body')

const buttonChangeColor = bodySelect.children[1].children[1]
const textCheckColor = bodySelect.children[1] .children[0].lastChild

buttonChangeColor.addEventListener("click", () => {
  const newBackColor = getRandomHexColor();
  textCheckColor.textContent = newBackColor;
  bodySelect.style.backgroundColor = newBackColor;
})