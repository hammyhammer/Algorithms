// Given a string. Determine the number of letters in the last word.

const lastWord = (string) => {
  // Create  a variable to remove the white space within the string
  let sentence = string.trim()

  // Create an array version of the string. ['Hello', 'there', "Anakin"]
  let array = sentence.split(' ')

  // Remove the last word in the string and intitaze it as a variable. 
  let final = array.pop()
  final.split('')
  return final.length
}
// This solution has a complex of O(1) Because we are accessing the last word in the array.
console.log(lastWord('Hello there, Anakin'))