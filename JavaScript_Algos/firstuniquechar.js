// Given a string, return the index of the first unique character.
// (hello -> would return 0 because h is unique and appears first).

const firstUniqueChar = (string) => {
  let count = {};

  for (let char of string) {
    if (count[char] !== undefined) {
      count[char]++
    }
    else {
      count[char] = 1
    }
  }
  // console.log(count)
  for (let i = 0; i < string.length; i++) {
    if (count[string[i]] === 1) {
      return i
    }
  }
  return -1
}

console.log(firstUniqueChar('hello'))
