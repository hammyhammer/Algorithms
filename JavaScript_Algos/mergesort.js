// We want to break up our array into havles until there is a single element
// or are empty
// Once we have them, we merge those arrays with other sorted arrays
function merge(array1, array2) {
  let results = [];
  let i = 0;
  let j = 0;

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


