// Contains nodes. Contains head, tail, and length property.
// Nodes pointing to another node. Think of it like a train.
// Unlike arrays, they do not have indexes. Random acess is not allowed
// No indexes means insertion and deletion is cheap (do not have to reindex everything).


class Node {
  constructor(val) {
    this.value = value;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = head;
    this.tail = tail;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift() {
    let newNode = new Node.value;
    if (!head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this
    }
  }

}

//This method below is not optimal because of all the .next.next
let first = new Node('Hello');
first.next = new Node('there')
first.next.next = new Node('Anakin')
first.next.next.next = new Node('Skywalker')

// this is what we want to aim for. 
let list = new SinglyLinkedList()
list.push('Hello')
list.push('THere')

console.log(list)