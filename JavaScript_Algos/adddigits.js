// Given an integer, repeatedly add all its digits utnil the result
// has only one digit, and return it.

const addDigits = (num) => {
  let array = num.toString().split('')
  if (array.length <= 1) {
    return num
  }



}

console.log(addDigits(8))