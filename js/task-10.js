function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = () => {
  const amount = input.value;
  let divSize = 30;

  for (let i = 0; i<amount; i+=1){
  const boxDiv = document.createElement('div');
  boxDiv.style.width = `${divSize}px`;
  boxDiv.style.height =`${divSize}px`;
  boxDiv.style.backgroundColor = getRandomHexColor();

  divSize+=10;
}}

const destroyBoxes = () =>{
  boxes.innerHTML = '';
}

const input = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);



