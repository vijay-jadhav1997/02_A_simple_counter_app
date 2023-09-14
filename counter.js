// reference of 
const display = document.querySelector('#display');
const decreaseBtn = document.querySelector('#decrease_Btn');
const resetBtn = document.querySelector('#reset_Btn');
const increaseBtn = document.querySelector('#increase_Btn');


// event handlers
decreaseBtn.addEventListener('click', () => {
  let result = Number(display.innerText)
  result--;
  display.textContent = result;
});

resetBtn.addEventListener('click', () => {
  display.textContent = 0;
});

increaseBtn.addEventListener('click', () => {
  let result = Number(display.innerText) 
  result++;
  display.textContent = result;
}, false);
