class Node {
  constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {  //O(log2 n)
    const newNode = new Node(data); 
    if (!this.root) {
      return this.root = newNode;
    }

    this.insertNode(this.root, newNode); 
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        return node.left = newNode;
      }
      return this.insertNode(node.left, newNode);
    }
    if (!node.right) {
      return node.right = newNode;
    }
    return this.insertNode(node.right, newNode);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (!node) {
      return null;
    }
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (!node.left && !node.right) {// deleting node with no children 
      node = null;
      return node;
    }

    if (!node.left) {// deleting node with one children
      node = node.right;
      return node;
    }

    if (!node.right) {// deleting node with one children
      node = node.left;
      return node;
    }

    // Deleting node with two children minimum node of the right subtree
    // is stored in aux
    const aux = this.findMinNode(node.right);
    node.data = aux.data; 
  
    node.right = this.removeNode(node.right, aux.data); 
    return node; 
  }

  findMinNode(node) {
    if (!node.left) {
      return node
    }
    return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  find(key) {
    return this.findNode(this.root, key);
  }

  findNode(node, key) { //O(log2 n)
    if (!node) {
      return null
    }
    if (key < node.data) {
      return this.findNode(node.left, key);
    }
    if (key > node.data) {
      return this.findNode(node.right, key);
    }
    return node
  }

  //TREE traversal
  inOrder(node, fn) {
    if (node && fn) {
      this.inOrder(node.left, fn);
      fn('inOrder >>>', node.data);
      this.inOrder(node.right, fn);
    }
  }

  preOrder(node, fn) {
    if (node && fn) {
      fn('preOrder >>>', node.data);
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  }

  postOrder(node, fn) {
    if (node && fn) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      fn('postOrder >>>', node.data);
    }
  }
}

const data = [15,25,10,7,22,17,13,5,9,27];
const tree = new BinarySearchTree();

for(let i = 0; i < data.length; ++i) {
  tree.insert(data[i]);
}

//TREE traversal
const fn = (name, value) => {
  console.log(`${name} ==> ${value}`);
}

const inOrderRes = tree.inOrder(tree.getRootNode(), fn);

const preOrderRes = tree.preOrder(tree.getRootNode(), fn);

const postOrderRes = tree.postOrder(tree.getRootNode(), fn);
