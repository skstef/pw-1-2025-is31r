const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterInput = document.getElementById("counter");

let counterValue = 0;
const MIN_VALUE = 0;
const MAX_VALUE = 9;

function updateButtonStates() {
  decrementButton.disabled = counterValue === MIN_VALUE;
  incrementButton.disabled = counterValue === MAX_VALUE;
}

decrementButton.addEventListener("click", () => {
  if (counterValue > MIN_VALUE) {
    counterValue--;
    counterInput.value = counterValue;
    updateButtonStates();
  }
});

incrementButton.addEventListener("click", () => {
  if (counterValue < MAX_VALUE) {
    counterValue++;
    counterInput.value = counterValue;
    updateButtonStates();
  }
});

updateButtonStates();
