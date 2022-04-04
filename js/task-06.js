const inputEl = document.querySelector('#validation-input');

const inputLength = inputEl.dataset.length;



inputEl.addEventListener('blur', onFocusInput)



function onFocusInput(eventy){
    const textLength = eventy.target.value;
       if (textLength.length === +inputLength) {
         inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
         inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};






















