// Is used for HTML DOM, network routing, abstract syntax tree, AI, folders in Operating Systems, computer file systems

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

let tree = new BinarySearchTree();

// This method below is a pain. With Insert, it will be more intuitive 
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.lright = new Node(9)

console.log(tree)
