// Given an array of integers and an integer K, return the K most frequent elements. 

let topKFrequent = function (nums, k) {
  // We create an empty object. We will go through the whole nums array and record the frequency 
  // for each unique numbers. 
  let map = {};

  let results = []
  // Base condition, if nums is empty, return empty []
  if (nums.length === 0) return results;

  // How we add and record our unique numbers and their frequency. 
  for (let element of nums) {
    if (map[element]) {
      map[element] += 1
    }
    else {
      map[element] = 1
    }
  }

  // Sorting our object from most frequent to least. 
  let array = Object.entries(map)
  array.sort((a, b) => {
    return b[1] - a[1]
  })

  // Slicing the array to whatever K would be, then pushing the key into results array. 
  array.slice(0, k).forEach(element => results.push(+element[0]));
  return results
};

// Time Complexity: O(n) because we have to go through the nums array to count. 
// However we are sorting so for larger entries it could O(n log n). For smaller arrays it could be O(n)

console.log(topKFrequent([3, 3, 4, 5, 1, 1, 1, 2, 2, 3], 2))