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

let first = new Node('Hello');
first.next = new Node('there')
first.next.next = new Node('Anakin')