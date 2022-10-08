// Given an array of integers, return all eleents that appear more a third of the size of the array.

let majorityElement = function (nums) {
  let count = {};
  let majority = Math.floor(nums.length / 3);
  let result = [];

  for (let number of nums) {
    if (count[number]) {
      count[number] += 1;
    }
    else {
      count[number] = 1
    }
  }

  for (let key in count) {
    if (count[key] > majority) {
      result.push(Number(key))
    }
  }
  return result
};

console.log(majorityElement([3, 2, 3]))