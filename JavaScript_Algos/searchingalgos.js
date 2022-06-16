// This file contains different methods for searching through arrays.

// LINEAR SEARCH
// Finding a value within an array
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i
    }
  }
  return -1
}

// This is an example of a linear complexity. We are going through
// the entire array to see if we can find a match for the value. 
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7))