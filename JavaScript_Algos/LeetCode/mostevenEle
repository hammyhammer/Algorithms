// Most Frequent Even Element.

// Return the smallest even number that appears most frequently. 

let mostFrequentEven = (nums) => {
  // We will use a hashmap to record the frequency of even numbers.
  let count = {}

  // We will declare final variable to return later.
  // Max will be used to record the total frequency of the largest value we see.
  let final
  let max = 0

  for (let char of nums) {
    // We only care about even numbers. Our hashmap will only contain even numbers.
    if (char % 2 === 0) {
      count[char] = count[char] + 1 || 1
    }
  }

  for (let keys in count) {
    // If the value of the key is greater than max, we assign it to max
    // And also we assigned final to the key (whatever even number)
    if (count[keys] > max) {
      max = count[keys]
      final = keys
    }
  }
  // If final is 0 or greater, return it. Else we will return -1 in the event there are no even numbers at all.
  return Number(final) >= 0 ? final : -1
}
// Time complexity: O(n). We have to go through the entire array of nums to see what numbers are even.
// Also, we going through the entire count object as well to see what key has a value larger than max.

mostFrequentEven([1, 2, 3, 2, 2, 4, 4, 5, 9])