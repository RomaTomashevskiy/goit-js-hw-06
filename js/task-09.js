const btnEl = document.querySelector('.change-color');

const textEl = document.querySelector('.color');



btnEl.addEventListener('click', () => {
  document.body.style.backgroundColor =  getRangomColor()
  textEl.textContent = getRangomColor();
 
});


function getRangomColor() {
  return `#${getRandomHexColor()}${getRandomHexColor()}${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, 0);
}

