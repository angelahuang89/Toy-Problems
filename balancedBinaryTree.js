class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const isBalanced = root => {
  if (!root) return true;
  const leftHeight = findDepth(root.left, 0);
  const rightHeight = findDepth(root.right, 0);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

const findDepth = (node, height) => {
  if (!node) return height;
  height += 1;
  return Math.max(findDepth(node.left, height), findDepth(node.right, height));
};

// const isBalanced = root => {
//   return height(root) !== -1;
// };

// var height = root => {
//   if (!root) return 0;

//   const leftHeight = height(root.left);
//   if (leftHeight === -1) return -1;
//   const rightHeight = height(root.right);
//   if (rightHeight === -1) return -1;

//   if (Math.abs(leftHeight - rightHeight) > 1) return -1;
//   return Math.max(leftHeight, rightHeight) + 1;
// }

/*
specification
input: binary tree
output: boolean, true if tree is height balanced, false if not
definition of a balanced binary tree: a binary tree in which the depth of the two subtrees of every node never differ by more than one
constraints: 
edge cases:

justification:
to determine whether a binary tree is height balanced

explanation
the structure of the input binary tree will determine whether it is balanced

visualization

approximation
if the root doesnt exist, return null
for every node, get the height of the left subtree and the right subtree
if the height difference is greater than one, return false
otherwise, continue traversing the tree and checking

verification

implementation

*/

const aRoot = new TreeNode(3);
const aLeft = new TreeNode(9);
const aRight = new TreeNode(20);
aRoot.left = aLeft;
aRoot.right = aRight;
const aRightLeft = new TreeNode(15);
const aRightRight = new TreeNode(7);
aRight.left = aRightLeft;
aRight.right = aRightRight;

console.log(isBalanced(aRoot));