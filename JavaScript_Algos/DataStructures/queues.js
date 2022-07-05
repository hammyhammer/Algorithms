// First in First Out

//Building a Queue with an array
let q = [];

q.unshift(1)
q.unshift(2)
q.unshift(3)
q.pop()
q.pop()


// Class implemention
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    return ++this.size
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}

let qt = new Queue()

qt.enqueue(1)
qt.enqueue(5)
qt.enqueue(2)
qt.dequeue()
console.log(qt)

// Complexity:
// Insertion = O(1)
// Removal = O(1)
// Searching = O(N)
// Access = O(N)
