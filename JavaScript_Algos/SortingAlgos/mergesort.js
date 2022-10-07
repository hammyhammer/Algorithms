// We want to break up our array into havles until there is a single element
// or are empty
// Once we have them, we merge those arrays with other sorted arrays
function merge(array1, array2) {

  // We create an empty array to push our values in order into.
  let results = [];
  let i = 0;
  let j = 0;

  // Determining what values will be pushed into the results array
  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    }
    else {
      results.push(array2[j]);
      j++;
    }
  }

  // Logic for if one array runs out of elements but not the other, just to push them into results
  while (i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    results.push(array2[j])
    j++
  }
  return results
}

function mergeSort(array) {
  // Cutting the array until it is one or less
  if (array.length <= 1) return array
  // Cutting it in the middle of the array
  let middle = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, middle))
  let right = mergeSort(array.slice(middle))
  // Sorts and then merge the arrays 
  return merge(left, right)
}
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))

// The complexity for merge sort is O(n log n). Whenever we split
// Depending on how many elements are in an array, we are asking the 
// exponent value to reach the total length. O(log n). But we are still
// going through all the elements to compare so O(n)