// Given a string. Determine the number of letters in the last word.

const lastWord = (string) => {
  let sentence = string.trim()
  let array = sentence.split(' ')
  let final = array.pop()
  final.split('')
  return final.length
}

console.log(lastWord('Hello there, Anakin'))