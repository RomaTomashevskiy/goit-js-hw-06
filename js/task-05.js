const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


input.addEventListener('input', getNewName);

function getNewName() {
    if (input.value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = input.value;
  }
};









