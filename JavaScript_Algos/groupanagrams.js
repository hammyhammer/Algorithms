function groupAnagrams(strs) {
  // We will sort and form a hashtable to come to a solution.

  // Below we create a new variable to make a new array with the elements sorted by alphabet.
  let sortedArray = strs.map(word => word.split('').sort().join())

  let map = {};

  for (let i = 0; i < strs.length; i++) {

    // If the object does not have an occurance, create a new key with the sorted element, 
    // and add the unsorted element as a value to it.
    if (!map[sortedArray[i]]) {
      map[sortedArray[i]] = [strs[i]]

      // If it does exist, then add unsorted element to key as a value 
    } else {
      map[sortedArray[i]].push(strs[i])
    }
  }
  // We just care about the values, so return the values
  return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

// Time: O(n x n log n) because we are sorting the elements by ABC order first (n log n),
// and also are going through the entire array (linear)
// Space: O(n) because the amount of space to store the results is equal to how many are in the array.
