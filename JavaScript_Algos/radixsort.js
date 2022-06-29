// Unique because it does not make comparsions between elements
// Special way to sort numbers by looking at how many digits a number
// has.

// HELPER FUNCTION
function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2))