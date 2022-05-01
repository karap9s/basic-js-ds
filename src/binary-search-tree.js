const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
    constructor() {
      this.roots = null;
    }
  
    root() {
      return this.roots;
    }
  
    add(data) {
      this.roots = addWithin(this.roots, data);
  
      function addWithin(node, data) {
        if (!node) {
          return new Node (data);
        }
  
        if (node.data === data) {
          return node;
        }
  
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
        return node;
    }
  }
  
    has(data) {
      return searchWithin (this.roots, data);
  
      function searchWithin(node, data) {
        if (!node) {
          return false;
        }
  
        if (node.data === data) {
          return true;
        }
  
        if (data < node.data) {
          return searchWithin(node.left, data);
        } else {
          return searchWithin(node.right, data);
        }
      }
    }
  
    find(data) {
      return findNode(this.roots, data);
  
      function findNode(node, data) {
        if (!node) {
          return null;
        }
  
        if (data < node.data) {
          return findNode(node.left, data);
        } else if (data > node.data)  {
          return findNode(node.right, data);
        } else {
          return node;
        }
      }
    }
  
    remove(data) {
      this.roots = removeNode(this.roots, data);
  
      function removeNode(node, data) {
        if (!node) {
          return null;
        }
  
        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          }
  
          let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
  
          node.data = minFromRight.data;
  
          node.right = removeNode(node.right, minFromRight.data);
  
          return node;
        }
      }
    }
  
    min() {
      return searchWithin (this.roots);
  
      function searchWithin(node) {
        if (!node) {
          return null;
        }
        if (!node.left) {
          return node.data;
        } else {
          return searchWithin(node.left);
        }
      }
    }
  
    max() {
      return searchWithin (this.roots);
  
      function searchWithin(node) {
        if (!node) {
          return null;
        }
        if (!node.right) {
          return node.data;
        } else {
          return searchWithin(node.right);
        }
      }
    }
  }

module.exports = {
  BinarySearchTree
};