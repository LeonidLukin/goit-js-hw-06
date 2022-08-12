const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.getElementById('ingredients')

const makeItem = ingredients => {
  const item = document.createElement('li')
  item.classList.add('item')
  item.textContent = ingredients

  listRef.append(item)
  return item
}

const elements = ingredients.map(makeItem)

listRef.append(...elements)