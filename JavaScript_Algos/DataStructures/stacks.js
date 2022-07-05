// Stacks are data collections. Last in, first out 

// Using arrays as a stack
let stack = [];

stack.push('google')
stack.push('youtube')
stack.pop()
console.log(stack)

// Singly Linked Lists
class Node {
  constrcutor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp
    }
    return ++this.size
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next
    this.size--;
    return temp.value
  }
}



let stack2 = new Stack()
stack2.push(1)
stack2.push(3)
stack2.push(5)
stack2.pop()
console.log(stack2)

// Complexity:
// Insertion = O(1)
// Removal = O(1)
// Search = O(N)
// Access = O(N) 
