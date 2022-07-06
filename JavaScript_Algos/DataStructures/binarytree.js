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

    // If there is no binary tree. Set the root to the value. 
    if (this.root === null) {
      this.root = newNode;
      return this
    }

    else {
      let current = this.root;
      while (true) {

        // If there is a duplicate, we will return undefined;
        if (value === current.value) return undefined;

        // For the left side of the tree. If the value is less than the current (which starts at root)
        // We will direct the value to go left. 
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }

          // For the right side of the tree. If the value is more than the current (which starts at root)
          // We will direct the value to go right. 
        } else if (value > current.value) {
          current.right = newNode;
          return this
        } else {
          current = current.right
        }
      }
    }
  }

  find(value) {
    // If there is no root, then there is no tree
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {

      // If the value is less than current value, go left in the tree
      if (value < current.value) {
        current = current.left;
      }
      // If the value is more than current value, go right in the tree
      else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }


  ///////////////TRANSVERSAL///////////////////

  BFS() {
    let node = this.root
    let data = []
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value);
    }
    traverse(this.root)
    return data
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value);
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
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
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())

// console.log(tree)

// Both searching and insertion has a complexity of O(log n). Pretty solid. 
// But not guaranteed. It is all dependent on the composition of the tree. It could
// have a singly linked list look where it is just all one sided in a straight line
