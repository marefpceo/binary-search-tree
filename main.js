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
    this.arr = this.arraySort(arr);
    this.root = this.buildTree(this.arr);
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

  // Sorts array and removes duplicates
  arraySort(arr) {
    let sortedArray = arr.sort();
    let arrayNoDuplicates = sortedArray.filter((a, b) => sortedArray.indexOf(a) === b);
    return arrayNoDuplicates;
  }

  // Search tree for value and return if found
  find(value) {
    let current = this.root;
    while (current !== null) {
      if (current.data === value) {
        return current;
      } else if (value < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  // Inserts a new value into the BST
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let current = this.root;
    while (current) {
      if(value === current.data) {
        return undefined;
      }
      
      if (value < current.value) {
        if(current.left === null) {
          current.left = newNode;
          return current;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return current;
        }
        current = current.right;
      }
    }
  }

  // Calls deleteNode function
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }


  deleteNode(current, value) {
    if (current === null) {
      return current;
    }

    if (value === current.data) {
      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        let temp = this.minValue(current.right);
        current.data = temp.data;
        current.right = this.deleteNode(current.right, temp.data);
        return current;
      }
    } else if (value < current.data) {
      current.left = this.deleteNode(current.left, value);
      return current;
    } else {
      current.right = this.deleteNode(current.right, value);
      return current;
    }
  }

  // Utility function to find smallest value from inorder successor
  minValue(root) {
    while (!root.left === null) {
      root = root.left;
      return root;
    }
  }

  // Finds the height of the tree
  height(root) {
    if (root === null) {
      return 0;
    } else {
      let left = height(this.root.left);
      let right = heigth(this.root.right);

      if (left > right) {
        return (left + 1);
      } else {
        return (right + 1);
      }
    }
  }

  levelOrder(root) {
    if (root === null) {
      return [];
    }
    let result = [];
    let queue = [root];
    while (queue.length !== 0) {
      let subArr = [];

      for (let i = 0; i < queue.length; i + 1) {
        let node = queue.shift();

        if (node.left ) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
        result.push(subArr);
      } 
    }
    console.log(result);
    return result;
  }

  // Prints BST in a readable format to the console
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

// const bst = new Tree([1,2,3,4,5,6,7]);
// const bstSort = new Tree([7,6,5,4,3,2,1]);
const bstSortDuplicates = new Tree([2,6,5,1,3,6,7,4,1]);
// bst.prettyPrint(bst.root);
// bstSort.prettyPrint(bstSort.root);
// bstSortDuplicates.prettyPrint(bstSortDuplicates.root);
// console.log(bstSortDuplicates.find(6));
// console.log(bstSortDuplicates.insert(8));
// bstSortDuplicates.prettyPrint(bstSortDuplicates.root);
// console.log(bstSortDuplicates.delete(7));
bstSortDuplicates.prettyPrint(bstSortDuplicates.root);
bstSortDuplicates.levelOrder(bstSortDuplicates.root);