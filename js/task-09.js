const btnEl = document.querySelector('.change-color');

const textEl = document.querySelector('.color');



const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#FFD700',
  '#4169E1',
  '#FFE4E1',
  '#556B2F',
  '#48D1CC',
  '#808000',
  '#FFEBCD',
  '#BC8F8F',
  '#228B22',
  '#FFDAB9',
  '#66CDAA',
  '#191970',
];


btnEl.addEventListener('click', () => {
  document.body.style.backgroundColor =  colors[getRandomHexColor()]
  textEl.textContent = colors[getRandomHexColor()];
 
});


function getRandomHexColor() {
  return (Math.floor(Math.random() * colors.length));
}


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// btnEl.addEventListener('click', () => {

//   const r = Math.floor(Math.random ()* 200)
//   const b = Math.floor(Math.random ()* 200)
//   const d = Math.floor(Math.random ()* 200)
//   document.body.style.backgroundColor = `rgb(${r}   ${b}    ${d})`;
// });


