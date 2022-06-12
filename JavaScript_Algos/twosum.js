// Given an array of numbers, and a target value. Determine if the
// array of numbers contains two elements that can add up to the 
// target sum. 

const sumTwo = (nums, target) => {
  // We create an object to store and then access the 
  // numbers quickly.
  let map = {};

  // We create a variable for the length of the array
  // Because it helps with the time complex a little. We
  // do lose some space complexity though. 
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    let currentNumber = nums[i]
    let perfectMatch = target - currentNumber
    if (map[perfectMatch] !== undefined) {
      return [map[perfectMatch], i]
    }
    else {
      map[currentNumber] = i
    }
  }
}

console.log(sumTwo([1, 5, 9, 10], 14))

/////////////////////////////////////////////////

const twoSum = (nums, target) => {
  // We can iterate over the array. We can compare different numbers
  // to one another to see if they add up to the target number
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

}

console.log(twoSum([1, 5, 9, 10], 19))

// The complexity for this solution is O(n^2) because of the nested
// for loop.