// Given an array of numbers, and a target value. Determine if the
// array of numbers contains two elements that can add up to the 
// target sum. 

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

}

console.log(twoSum([1, 5, 9, 10], 19))