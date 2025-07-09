const display = document.getElementById('display');

// Add value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Delete the last character
function backspace() {
  display.value = display.value.slice(0, -1);
}
