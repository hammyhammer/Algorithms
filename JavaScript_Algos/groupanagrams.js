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