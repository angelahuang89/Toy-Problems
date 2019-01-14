class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const minDepth = root => {
  let min = Infinity;
  if (!root) return 0;
  const traverse = (node, depth=1) => {
    if (!node.left && !node.right) {
      min = Math.min(min, depth);
    }
    if (node.left) traverse(node.left, depth+1);
    if (node.right) traverse(node.right, depth+1);
  }
  traverse(root);
  return min;  
};

// specification
// input: binary tree
// output: minimum depth of binary tree, which is the number of levels from the root to the closest leaf node
// constraints:
// edge cases: if there is no root, return 0

// justification
// to find the minimum depth of a binary tree

// explanation
// the structure of the binary tree will determine its minimum depth

// visualization

// approximation
// declare variable for min depth at 0
// declare variable for current depth
// start from root
// traverse the tree depth first
// once a leaf node is found, determine whether the depth is less than the min depth
  // if the current depth is less than the minimum depth, update min depth
// return the min depth

// verification

// implementation

const root = new TreeNode(3);
const rootLeft = new TreeNode(9);
const rootRight = new TreeNode(20);
root.left = rootLeft;
root.right = rootRight;
const rightLeft = new TreeNode(15);
const rightRight = new TreeNode(7);
rootRight.left = rightLeft;
rootRight.right = rightRight;

console.log(minDepth(root));