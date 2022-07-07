class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex];
      if (element <= parent) break
      this.values[parentIndex] = element;
      this.values[index] = parent
      index = parentIndex
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(13)
heap.insert(100)
heap.insert(50)

console.log(heap.values)