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
    // If there's a number that exists in the object that
    // can add up to the target with current number, we
    // return our solution
    if (map[perfectMatch] !== undefined) {
      return [map[perfectMatch], i]
    }
    // Else, we just store it.
    else {
      map[currentNumber] = i
    }

  }
}

console.log(sumTwo([1, 5, 9, 10], 14))
// The complexity of this solution is O(n). Because with the
// object, we can access the values quicker but it is still
// proportional to how large the array is 

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

// console.log(twoSum([1, 5, 9, 10], 19))

// The complexity for this solution is O(n^2) because of the nested
// for loop.