// Given a sorted array, count the unqiue values in the array.

const countUniqueValues = (array) => {
  // We create a empty object.
  let count = {};

  // With a for of loop, we record how many times a value appears
  // and store it as a key value pair within our count object. 

  for (let element of array) {
    // If a value already exists in our object, we increment it by
    // one. 
    if (count[element] !== undefined) {
      count[element]++
    }
    // Else we create a new key and give it a value of one. 
    else {
      count[element] = 1
    }
  }

  // We return the length of the keys within count to determine how
  // many unique values exist. 
  return Object.keys(count).length
}

// The compexity for this solution would be O(n), because we still
// have to go through th entire array to ensure we get all the
// values. 
// console.log(countUniqueValues([]))

//////////////////////////////////////////////////////////

const recordUniqueValues = (array) => {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++
      array[i] = array[j]
    }
  }
  return i + 1;
}

console.log(recordUniqueValues([1, 1, 2, 3, 3, 4, 5]))