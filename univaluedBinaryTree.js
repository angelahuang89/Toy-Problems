class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const isUnivalTree = root => {
  if (!root) return true;
  const sameLeft = root.left ? root.val === root.left.val : true;
  const sameRight = root.right ? root.val === root.right.val : true;
  return isUnivalTree(root.left) && isUnivalTree(root.right) && sameLeft && sameRight;
}

/*
specification
input: binary tree
output: boolean, true if all values in tree are the same, false if values are not all the same
constraints:
edge cases

justification
to determine whether a tree is univalued or not

explanation
the values of the nodes in the tree will determine the output of whether the tree is univalued or not

visualization

approximation
if there is no root return true
traverse tree recursively
if any value is not the same as its childrens value, return false
if a node's children are null, return true
check each left and right child

verification
implementation
*/