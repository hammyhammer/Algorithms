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

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
}

console.log(getDigit(7323, 2))