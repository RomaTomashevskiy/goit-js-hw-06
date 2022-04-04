
const numCategoriesEl = document.querySelectorAll(".item")

console.log(`В списке ${numCategoriesEl.length} категорий `);


const categoriesEl = [...numCategoriesEl]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesEl);


