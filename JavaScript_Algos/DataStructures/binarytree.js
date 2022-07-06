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

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          current.right = newNode;
          return this
        } else {
          current = current.right
        }
      }
    }

  }

}

let tree = new BinarySearchTree();

// This method below is a pain. With Insert, it will be more intuitive 
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.lright = new Node(9)

// console.log(tree)

tree.insert(10);
tree.insert(5);
tree.insert(13)
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree)

