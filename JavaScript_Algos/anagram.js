// Given two strings return true if the each contains the same 
// letters. Else return false.

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  let map = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (map[letter] !== undefined) {
      map[letter] += 1
    }
    else {
      map[letter] = 1
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let letter = str2[j]
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