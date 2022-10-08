// Given an array of integers, return all eleents that appear more a third of the size of the array.

let majorityElement = function (nums) {
  // We have to count the frequency of each number within the array
  let count = {};
  // Variable for a third of the array.
  let majority = Math.floor(nums.length / 3);
  // We will return result by pushing whatever numbers occur more than a third of the array size.
  let result = [];

  // For populating our object.
  for (let number of nums) {
    if (count[number]) {
      count[number] += 1;
    }
    else {
      count[number] = 1
    }
  }


  for (let key in count) {
    // If the key has a value that is greatert than the majority, push it into the results. 
    if (count[key] > majority) {
      result.push(Number(key))
    }
  }
  return result
};

console.log(majorityElement([3, 2, 3]))