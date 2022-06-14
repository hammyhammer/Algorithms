// Given an array of numbers. Return the number that appears the
// most within that array.

const majorityElement = (nums) => {
  let count = {};

  for (let element of nums) {
    if (count[element] !== undefined) {
      count[element]++
    }
    else {
      count[element] = 1
    }
  }

  for (let key in count) {
    if (count[key] >= nums.length / 2) {
      return key
    }
  }
}

console.log(majorityElement([1, 2, 2, 3, 2]))