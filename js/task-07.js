const input = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');



input.addEventListener('input', () => {
    const meaningInput = input.value;

    textEl.style.fontSize = meaningInput + 'px';
});

















