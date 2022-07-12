let array = [[0, 5], [20, 30], [14, 20]]

function schedule([startTime, endTime]) {
  for (let i = 0; i < array.length; i++) {

    // Syntactic error with array[i][0]. Originally was array[i[0]] 
    if (startTime >= array[i][0] && endTime <= array[i][1]) return false;
    if (startTime <= array[i][0] && endTime >= array[i][1]) return false
  }
  // Did not push the input values as an array. Without it array would look like
  // [[0, 5], [20, 30], 15, 20].
  array.push([startTime, endTime])
  return true
}
schedule([40, 51])
schedule([60, 90])
schedule([20, 40])
console.log(array)


