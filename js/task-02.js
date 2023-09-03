const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsToPush = [];

ingredients.forEach(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  ingredient.classList = 'item'
  ingredientsToPush.push(ingredient)
})

const selectIngredientsUl = document.querySelector('ul#ingredients')
selectIngredientsUl.append(...ingredientsToPush)

