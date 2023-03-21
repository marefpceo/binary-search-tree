/*eslint-disable*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    if (start > end) return null;

    let mid = Math.floor(((start + end) / 2));
    let node = new Node(arr[mid]);

    node.left = this.buildTree(arr.slice(start, mid));
    node.right = this.buildTree(arr.slice((mid + 1), (end + 1)));

    return node;
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
  
}

const bst = new Tree([1,2,3,4,5,6,7]);
bst.prettyPrint(bst.root);
