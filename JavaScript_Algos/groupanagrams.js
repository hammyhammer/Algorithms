function groupAnagrams(strs) {
  let sortedArray = strs.map(word => word.split('').sort().join())

  let map = {};

  for (let i = 0; i < strs.length; i++) {
    if (!map[sortedArray[i]]) {
      map[sortedArray[i]] = [strs[i]]
    } else {
      map[sortedArray[i]].push(strs[i])
    }
  }

  return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

// Time: O(n x n log n) because we are sorting the elements by ABC order first (n log n),
// and also are going through the entire array (linear)
// Space: O(n) because the amount of space to store the results is equal to how many are in the array.
