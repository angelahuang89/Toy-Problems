class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const rangeSumBST = (root, L, R) => {
  let sum = 0;
  const traverse = node => {
    if (!node) return;
    if (node.val >= L && node.val <= R) sum += node.val;
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return sum;
};

// const rangeSumBST = (root, L, R) => {
//   let sum = 0;
//   const stack = [root];
//   while (stack.length > 0) {
//     const curr = stack.pop()
//     if (!curr) continue;
//     if (curr.val < L) {
//       stack.push(curr.right)
//     } else if (curr.val > R) {
//       stack.push(curr.left)
//     } else {
//       sum += curr.val
//       stack.push(curr.left)
//       stack.push(curr.right)
//     }
//   }
//   return sum;
// };

// const rangeSumBST = (root, L, R) => {
//   if (!root) {
//     return 0;
//   }

//   if (root.val < L) {
//     return rangeSumBST(root.right, L, R);    
//   }
  
//   if (root.val > R) {
//     return rangeSumBST(root.left, L, R);    
//   }
  
//   return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R); 
// };

/*
specification
input: root of binary search tree and a left and right bound
output: sum of all nodes within the range of left and right
constraints: all nodes have unique values
edge cases:

justification:
to sum the values of nodes between a specified range

explanation
the structure of the binary search tree will determine the sum of the nodes in the range

visualization

approximation
declare sum as 0
traverse tree
if left is root, add all values to the right of root
if right is root, add all values to the left of root
the node value is greater than left and less than right
  add node value
  go left
  go right
if node value is the same as left or right, return

verification

implementation

*/

const aRoot = new TreeNode(10);
const aLeft = new TreeNode(5);
aRoot.left = aLeft;
const aLeftLeft = new TreeNode(3);
aLeft.left = aLeftLeft;
const aLeftRight = new TreeNode(7);
aLeft.right = aLeftRight;
const aRight = new TreeNode(15);
aRoot.right = aRight;
const aRightRight = new TreeNode(18);
aRight.right = aRightRight;

console.log(rangeSumBST(aRoot, 7, 15)); // 32