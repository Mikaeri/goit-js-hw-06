const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const elements = ingredients.map(element =>{
const newElement = document.createElement("li");
newElement.textContent = element;
newElement.className = 'item';
console.log(newElement);
return newElement;
});

list.append(...elements);



