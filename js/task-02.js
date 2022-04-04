const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const resultElementList = ingredients.map(ingredient => {
  
  const elementList = document.createElement('li');
  elementList.classList.add('item');
  elementList.textContent = ingredient;
  // elementList.style.listStyleType = 'none' 

  return elementList;
});


console.log(resultElementList);
ingredientsEl.append(...resultElementList);