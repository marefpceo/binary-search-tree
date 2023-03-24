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

  // Utility search function
  find(root, key) {
    if (root === null || root.data === key) {
      return root;
    }

    if (root.data < key) {
      return this.find(root.right, key);
    } 
    return this.find(root.left, key);
  }

  // Inserts a new value into the BST
  insert(root, key) {
    if (root === null) {
      root = new Node(key);
      return root;
    }

    if (key < root.data) {
      root.left = this.insert(root.left, key);
    } else if (key > root.data) {
      root.right = this.insert(root.right, key);
    }
    return root;
  }

  // Deletes a value from the BST
  delete(root, key) {
    if (root === null) {
      return root;
    }

    if (key < root.data) {
      root.left = this.delete(root.left, key);
    }

    if (key > root.data) {
      root.right = this.delete(root.right, key);
    } else {
      if (root.left === null) {
        return root.right;
      } else if(root.right === null) {
        return root.left;
      }
      root.data = this.minValue(root.right);
      root.right = this.delete(root.right, root.data);
    }
    return root;
  }

  // Utility function to find smallest value from inorder successort
  minValue(root) {
    let min = root.data;
      while(root.left !== null){
        min = root.left.data;
        root = root.left;
      }
      return min;
  }

  // Finds the height of the tree
  height(root) {
    if (root === null) {
      return 0;
    } else {
      let left = height(root.left);
      let right = heigth(root.right);

      if (left > right) {
        return (left + 1);
      } else {
        return (right + 1);
      }
    }
  }

  levelOrder(root, level) {
    if (root === null) {
      return;
    }
    if (level === 1) {
      return
    }
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
bstSortDuplicates.prettyPrint(bstSortDuplicates.root);
console.log(bstSortDuplicates.find(bstSortDuplicates.root, 6));
console.log(bstSortDuplicates.insert(bstSortDuplicates.root, 8));
bstSortDuplicates.prettyPrint(bstSortDuplicates.root);
console.log(bstSortDuplicates.delete(bstSortDuplicates.root, 4));
bstSortDuplicates.prettyPrint(bstSortDuplicates.root);