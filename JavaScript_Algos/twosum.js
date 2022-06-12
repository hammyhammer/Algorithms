// Given an array of numbers, and a target value. Determine if the
// array of numbers contains two elements that can add up to the 
// target sum. 

const sumTwo = (nums, target) => {
  let complementary = new Map();

  for (let i = 0; i < nums.target; i++) {
    if (complementary[nums[i]] >= 0) {
      return [complementary[nums[i]], i]
    }
    else {
      complementary[target - nums[i]] = i
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