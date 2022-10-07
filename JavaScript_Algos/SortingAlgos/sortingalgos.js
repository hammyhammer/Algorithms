// Bubble Sort
// An algo where the largest values will bubbble up to the top

const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swaping 
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array

}
// Complexity is O(N^2) because of the nested loops. 
console.log(bubbleSort([11, 4, 6, 2, 3, -3]))