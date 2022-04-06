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


decrementEl.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value
});




incrementEl.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value
});


