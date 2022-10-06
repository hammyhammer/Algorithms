// Given an integer array that is sorted in an increasing order,
// remove duplicates in-place so that we are left with unique values. 
// Do not make another array for the solution

function removeDuplicates(nums) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[counter] = nums[i]
      counter++
    }
  }
  return counter
}