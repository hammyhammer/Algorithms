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
  // mostDigits will determine what largest number(s) has how
  // many digits
  let maxDigitCount = mostDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    // Making the digit buckets. Making ten buckets
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([7323, 2]))

//Complexity is O(nk). n is the length of the array while k is the 
//length of the individual numbers
