// Given two strings return true if the each contains the same 
// letters. Else return false.

const validAnagram = (str1, str2) => {
  // Base case. if the strings dont match in length, then it is 
  // not possible for them to be valid to one another. 
  if (str1.length !== str2.length) {
    return false
  }
  // We create an object variable to later store the characters of
  // a string. 
  let map = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    // In our conditional; if the letter exists, we add one to it
    // Else we make a new key value pair. 
    if (map[letter] !== undefined) {
      map[letter] += 1
    }
    else {
      map[letter] = 1
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let letter = str2[j]

    // In our conditional; if a letter looping through in the
    // second string is not in map. We return false. Else we
    // will subtract a value from the character. if it goes 
    // negative, it will return false.
    if (!map[letter]) {
      return false
    }
    else {
      map[letter] -= 1
    }
  }
  return true
}

console.log(validAnagram('potato', 'pottao'))
// The complexity of this is O(n). Linear because of the size of
// the arugments put in would be proportional to the amount of time
// taken to go through it. 