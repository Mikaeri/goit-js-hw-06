const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
  };
  
  refs.createBtn.addEventListener('click', createBoxes);
  refs.destroyBtn.addEventListener('click', destroyBoxes);
  
  function createBoxes() {
  const boxSize = 30;
  const amount = refs.input.value;
  
  const boxes = Array.from({ length: amount }, (_, index) => {
  const box = document.createElement('div');
  box.style.width = `${boxSize + index * 10}px`;
  box.style.height = `${boxSize + index * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
  });
  
  refs.boxesDiv.append(...boxes);
  }
  
  function destroyBoxes() {
  refs.boxesDiv.innerHTML = '';
  }
  
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  
  
  
  
  