class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// const inorderTraversal = root => {
//   const output = [];
//   if (!root) return output;
//   const traverse = node => {
//     if (!node) return;
//     traverse(node.left);
//     output.push(node.val);
//     traverse(node.right);
//   }
//   traverse(root.left);
//   output.push(root.val);
//   traverse(root.right);
//   return output;
// };

// const inorderTraversal = root => {
//   const output = [];
//   if (!root) return output;
//   const stack = [];
//   let curr = root;
//   while(curr) {
//     stack.push(curr);
//     curr = curr.left;
//   }
//   while (stack.length) {
//     curr = stack.pop();
//     output.push(curr.val);
//     curr = curr.right;
//     while(curr) {
//       stack.push(curr);
//       curr = curr.left;
//     }
//   }
//   return output;
// };

const inorderTraversal = root => {
  const output = [];
  const stack = [];
  let curr = root;
  while (curr && stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    output.push(curr.val);
    curr = curr.right;
  }
  return output;
}

/*
specification
input: binary tree
output: array representing in order traversal of tree
constraints:
edge cases:

justification
to obtain the inorder traversal of a binary tree

explanation
the order of the nodes in the binary tree will determine the output

visualization

approximation
declare empty array as output
if there is no root, return output
depth first search on the left subtree
depth first search on the right subtree
return output array

verification

implementation

*/

const aRoot = new TreeNode(1);
const aRight = new TreeNode(2);
aRoot.right = aRight;
const aRightLeft = new TreeNode(3);
aRight.left = aRightLeft;

console.log(inorderTraversal(aRoot)); // [1, 3, 2]