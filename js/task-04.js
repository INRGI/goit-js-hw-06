let counterValue = 0;

const counterDiv = document.querySelector('#counter')

const onClickDecrement = () => {
    counterValue -= 1;
    counterDiv.children[1].textContent = counterValue;
    
}
const onClickIncrement = () => {
    counterValue += 1;
    counterDiv.children[1].textContent = counterValue;
}

counterDiv.firstElementChild.addEventListener("click", onClickDecrement);
counterDiv.lastElementChild.addEventListener("click", onClickIncrement);


