// Given an array of integers and an integer K, return the K most frequent elements. 

let topKFrequent = function (nums, k) {
  let map = {};
  let results = []
  if (nums.length === 0) {
    return []
  }
  for (let element of nums) {
    if (map[element]) {
      map[element] += 1
    }
    else {
      map[element] = 1
    }
  }

  let array = Object.entries(map)
  array.sort((a, b) => {
    return b[1] - a[1]
  })

  array.slice(0, k).forEach(element => results.push(+element[0]));
  console.log(array)
  return results
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))