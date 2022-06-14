// Given a string, return the index of the first unique character.
// (hello -> would return 0 because h is unique and appears first).

const firstUniqueChar = (string) => {
  // We create an object variable to store the characters as
  // key value pairs
  let count = {};

  for (let char of string) {
    // If we have a key in our object, we increment it by one
    if (count[char] !== undefined) {
      count[char]++
    }
    // If it does not exist, we include it and intitialize it at one
    else {
      count[char] = 1
    }
  }
  console.log(count)
  for (let i = 0; i < string.length; i++) {
    // We iterate over the string and if we find a letter that
    // occurs once, we immediately return it, ending the loop 
    if (count[string[i]] === 1) {
      return i
    }
  }
  // If we do not find any keys that have just one, we will return -1
  return -1
}

// The complexity would be O(n) because we have to go through the whole string

console.log(firstUniqueChar('hello'))
