let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const initialValue = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counterValue -= 1;
  initialValue.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;
  initialValue.textContent = counterValue;
});
