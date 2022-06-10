// Given two strings, return true if they are the reversed version
// of one another. False if they are not.

const isPalindrome = (string1, string2) => {
  // Base case: if the words don't contain the same amount of 
  // letters, they cannot be reversed versions of themselves. 
  if (string1.length !== string2.length) {
    return false
  }


  let reverse1 = string1.split('').reverse().join('');
  let reverse2 = string2.split('').reverse().join('');
  console.log(reverse1.length)
  console.log(reverse2)

}

console.log(isPalindrome("hello", "hallo"))