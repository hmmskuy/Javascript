// mathOperations.js

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return a / b;
  }
}

export { multiply as kali, divide as bagi };
