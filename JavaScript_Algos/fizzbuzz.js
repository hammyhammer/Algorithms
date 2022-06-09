// Given an array of numbers listed 0 to 100, replace numbers 
// divisible by 3 with "Fizz", divisible by 5 with 'Buzz' and
// both 5 and 3 with 'Fizzbuzz'.

const fizzbuzz = (nums) => {
  // Base case: if the argument is less than one or greater than
  // 100, we will return false. 
  if (nums < 1 || nums > 100) {
    return false
  }
  // Creating an empty array so we can push numerical values 
  // into it as we go through the while loop.
  let array = [];

  while (nums > 0) {
    array.push(nums)
    nums--
  }
  array = array.reverse()

  // Looping through the array. Having conditional statements 
  // to determine to change the number to the respective word. 

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzbuzz'
    }
    else if (array[i] % 5 === 0) {
      array[i] = 'buzz'
    }
    else if (array[i] % 3 === 0) {
      array[i] = 'fizz'
    }
  }
  return array
}

console.log(fizzbuzz(50))

// The complexity would be O(n) because whatever the input we put it
// it would be proportional to the amount of time it would take to get
// through. 5 numbers would take a shorter amount time compared to 100.