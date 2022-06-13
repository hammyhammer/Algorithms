// Given a sorted array, count the unqiue values in the array.

const countUniqueValues = (array) => {
  let count = {};

  for (let element of array) {
    if (count[element]) {
      count[element]++
    }
    else {
      count[element] = 1
    }
  }
  // console.log(count)
  // console.log(Object.keys(count).length)
  return Object.keys(count).length
}

console.log(countUniqueValues([1, 1, 2, 3, 4, 5, 6, 6]))