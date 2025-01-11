const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterInput = document.getElementById("counter");

let counterValue = 0;
const MIN_VALUE = 0;
const MAX_VALUE = 20;
const SINGLE_CLICK_VALUE = 1;
const DOUBLE_CLICK_VALUE = 5;

function updateButtonStates() {
  decrementButton.disabled = counterValue === MIN_VALUE;
  incrementButton.disabled = counterValue === MAX_VALUE;
}

let timer;

function debounce(callbackFunction, shouldClearTimeout = true) {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    callbackFunction();
  }, 1000);

  if (!shouldClearTimeout) {
    timer = null;
  }
}

incrementButton.addEventListener("click", () => {
  console.log("click");
  debounce(() => {
    console.log("increment click");
    if (counterValue < MAX_VALUE) {
      counterValue += SINGLE_CLICK_VALUE;
      counterInput.value = counterValue;
      updateButtonStates();
    }
  }, true);
});

decrementButton.addEventListener("click", () => {
  console.log("click");
  debounce(() => {
    if (counterValue > MIN_VALUE) {
      counterValue -= SINGLE_CLICK_VALUE;
      counterInput.value = counterValue;
      updateButtonStates();
    }
  }, true);
});

incrementButton.addEventListener("dblclick", () => {
  console.log("dbclick");
  debounce(() => {
    console.log("increment dblclick");
    if (counterValue <= MAX_VALUE - 5) {
      counterValue += DOUBLE_CLICK_VALUE;
      counterInput.value = counterValue;
      updateButtonStates();
    }
  }, false);
});

decrementButton.addEventListener("dblclick", () => {
  debounce(() => {
    if (counterValue >= MIN_VALUE + 5) {
      counterValue -= DOUBLE_CLICK_VALUE;
      counterInput.value = counterValue;
      updateButtonStates();
    }
  }, false);
});

updateButtonStates();
