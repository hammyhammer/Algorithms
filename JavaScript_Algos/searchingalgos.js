// This file contains different methods for searching through arrays.

// LINEAR SEARCH
// Finding a value within an array be tranversing the entire array
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


// BINARY SEARCH
// The idea we want to do with a binary search is to "cut out" 
// parts of the array that we do not care about. 
// **This way only works for sorted arrays** 
const binarySearch = (array, value) => {
  // The start variable reflects index 0 of the array
  let start = 0;

  // The end variable reflects the last index of the array
  let end = array.length - 1;

  // We utilize Math.floor to round down a decimal result.
  // (In the event that the array has an even number of elements)
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== value && start <= end) {
    // If the value is less than the middle, we reinitialize end
    // to be middle minus one, because we know it cannot be beyond
    // the middle value or the middle value itself. 
    if (value < array[middle]) {
      end = middle - 1;
    }

    // If the value is greater than middle, we bring the start up
    // to the middle so we can focus of the second half of the array.
    else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  // If the middle is equal to value, then we chopped down
  // the sorted array down to the  last possible value (if it is there).
  if (array[middle] === value) {
    return middle
  }
  return -1
}

// The complexity of binary search is O(log n) because we are 
// not goingthrough every single element to find our value
// but rather we are chopping the array in selections we care about



console.log(binarySearch([1, 2, 4, 6, 8, 10, 14, 18, 21], 7))