class Node {
  constructor(data){
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor(data){
    this.root = new Node(data);
  }

  search(key){
    this.searchData(this.root, key);
  }

  searchData(root, key){
    if(root === null || root.data === key) return root;
    if(key < root.data) return this.searchData(root.left, key);
    return this.searchData(root.right, key);
  }

  insert(data){
    this.insertData(this.root, data);
    // console.log('inset root??',root);
  }

  insertData(root, data){
    if(root === null){
      root = new Node(data);
      return root;
    }
    if(data < root.data){
      root.left = this.insertData(root.left, data);
    } else if (data > root.data){
      root.right = this.insertData(root.right , data);
    }
    return root;
  }

  delete(data){
    this.deleteData(this.root, data);
  }

  deleteData(root, data){
    if(root === null) return null;
    if(data < root.data){
      root.left = this.deleteData(root.left, data);
    } else if(data > root.data){
      root.right = this.deleteData(root.right, data);
    } else {
      // if no child, then return null;
      if(root.left == null && root.right == null) return null;
      // if one of child is null, return null to remove
      else if(root.left === null) return root.right;
      else if(root.right === null) return root.left;

      // replace data with the leftMost data
      root.data = this.findMin(root.right);
      root.right = delete(root.right, root.data);
    }
    return root;
  }

  findMin(root){
    let min = root.data;
    while(root.left != null){
      min = root.left.data;
      root = root.left;
    }
    return min;
  }

} 

/**
 *      4 
 *   2     9
 * 1   3   5  7
 */
const binaryTree = new BinarySearchTree(4);
binaryTree.insert(2);
binaryTree.insert(1);
binaryTree.insert(3);
binaryTree.insert(9);
binaryTree.insert(5);
binaryTree.insert(7);
console.log(binaryTree);