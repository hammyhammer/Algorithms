// 

function pivot(array, start = 0, end = array.length - 1) {

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }


  // We create a variable called pivot to serve as a reference. In
  // this case, the first index in an array
  let pivot = array[start];
  // Keeps track of what index we are at.
  let swapIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    // if the first element in an array is greater than other
    // elements, we know it ought to be on the left side of the
    // array. Essentially it is a counter for how many elements are
    // less than the pivot so we know how far to move the starting
    // index within the array. 
    if (pivot > array[i]) {
      swapIndex++


      swap(array, swapIndex, i)
    }
  }
  swap(array, start, swapIndex)
  return swapIndex
}


function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right)
    quickSort(array, left, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, right)
  }
  return array
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))

