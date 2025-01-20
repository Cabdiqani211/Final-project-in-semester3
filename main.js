function clearDisplay() {
  document.getElementById('display').innerText = '0';
}
function appendToDisplay(value) {
  let display = document.getElementById('display');
  if (display.innerText === '0' && value !== '.') {
      display.innerText = value;
  } else {
      display.innerText += value;
  }
}
function calculate() {
  let display = document.getElementById('display');
  try {
      display.innerText = eval(display.innerText);
  } catch {
      display.innerText = 'Error';
  }
}
function backspace() {
  let display = document.getElementById('display');
  if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1);
  } else {
      display.innerText = '0';
  }
}