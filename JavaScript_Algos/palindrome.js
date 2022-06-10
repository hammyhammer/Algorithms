// Given two strings, return true if they are the reversed version
// of one another. False if they are not.

const isPalindrome = (string1, string2) => {
  // Base case: if the words don't contain the same amount of 
  // letters, they cannot be reversed versions of themselves. 
  if (string1.length !== string2.length) {
    return false
  }

  // Create two variables of our input strings as reversed versions.
  let reverse1 = string1.split('').reverse().join('');
  let reverse2 = string2.split('').reverse().join('');

  // If string1 is equal to the reverse version of string2. Likewise
  // Vice versa, return true. Else we will return false. 
  if (string1 === reverse2 || string2 === reverse1) {
    return true
  }

}

console.log(isPalindrome("kayak", "kayak"))

// The complexity would be 0(n) because of the linear relationship
// of how long the strings would be. The reverse method has a 
// linear complexity associated with it. 