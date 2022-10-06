// Given an array of numbers. Return the number that appears the
// most within that array.

const majorityElement = (nums) => {
  // We create an empty object so we can store the elements 
  // from the array within here
  let count = {};

  for (let element of nums) {
    // If the key already exists, we increase the value by one
    if (count[element] !== undefined) {
      count[element]++
    }
    // If there is no record of the key or element. We create
    // a new key value pair
    else {
      count[element] = 1
    }
  }

  for (let key in count) {
    // If a key has a value greater or equal to whatever half
    // the length is for the array, we return that key. 
    if (count[key] >= nums.length / 2) {
      return key
    }
  }
}

// The complexity would be O(n) because we have to go through
// the entire array to get all the values
console.log(majorityElement([1, 2, 3, 2]))