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
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
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
console.log(tree.find(999))
// console.log(tree)

