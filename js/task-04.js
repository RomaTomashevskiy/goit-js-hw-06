const decrementEl = document.querySelector('button[data-action="decrement"]')

const incrementEl = document.querySelector('button[data-action="increment"]')

const valueEl = document.querySelector('#value')



const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
      increment() {
          this.value += 1;
    },
};

const  targetButtonClickHandleDoDecrement = () => {
    valueEl.textContent = counterValue.value
    counterValue.decrement()
};

const  targetButtonClickHandleDoIncrement = () => {
    valueEl.textContent = counterValue.value
    counterValue.increment()
};


decrementEl.addEventListener('click', targetButtonClickHandleDoDecrement);
incrementEl.addEventListener('click', targetButtonClickHandleDoIncrement); 





// decrementEl.addEventListener('click', () => {
//     valueEl.textContent = counterValue.value
//     counterValue.decrement()
// });



// incrementEl.addEventListener('click', () => {
//     valueEl.textContent = counterValue.value
//     counterValue.increment()
// });








