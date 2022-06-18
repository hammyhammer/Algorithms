// Similar to bubble sort, the difference is that we are sorting
// based on what is the smallest value first. 
// We swap the values based on the lowest value


function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    let temp = array[i]
    array[i] = array[lowest]
    array[lowest] = temp
  }
  return array
}

console.log(selectionSort([34, 22, 10, 19, 17]))
