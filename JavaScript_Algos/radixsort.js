// Unique because it does not make comparsions between elements
// Special way to sort numbers by looking at how many digits a number
// has.

// HELPER FUNCTION
function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

console.log(getDigit(7323, 2))