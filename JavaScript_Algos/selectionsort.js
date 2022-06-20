// Similar to bubble sort, the difference is that we are sorting
// based on what is the smallest value first. 
// We swap the values based on the lowest value


function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    // We set J to i + 1 because we want to look at the value 'ahead' of
    // whatever i may be. 
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    // Swapping
    let temp = array[i]
    array[i] = array[lowest]
    array[lowest] = temp
  }
  return array
}

console.log(selectionSort([34, 22, 10, 19, 17]))

// The time complexity for selection sort is O(n^2) because
// of the nested loops. We are comparing individual values to one another
// and do not make a swap until we reach the end for an iteration. 