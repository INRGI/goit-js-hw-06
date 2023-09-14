const textNameInput = document.querySelector('#name-input')
const outputNameSpan = document.querySelector('#name-output')


textNameInput.addEventListener("input", () => {
    const currentInputValue = textNameInput.value.trim();

    if (currentInputValue === '') {
         outputNameSpan.textContent = 'Anonymous';
    }
    else {
        outputNameSpan.textContent = currentInputValue;
    }
    
})
