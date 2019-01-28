class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const pathSum = (root, sum) => {
  const result = [];

  if (!root) return result;
  
  const traverse = (node, currSum, path) => {
    currSum += node.val;
    path.push(node.val);
    if (!node.left && !node.right && currSum === sum) {
      result.push(path);
      return;
    }
    if (node.left) traverse(node.left, currSum, path.slice());
    if (node.right) traverse(node.right, currSum, path.slice());
  }
  
  traverse(root, 0, []);

  return result;
};

/*
specification
input: binary tree and target sum
output: array of all root to leaf paths that sum to target
constraints: 
edge cases:

justification
to find all root to leaf paths in a binary tree

explanation
the structure of the binary tree will determine the output array or arrays that sum to target

visualization

approximation
declare empty output array
traverse tree keeping track of current sum and path
if current sum equals target sum, push current path into output
traverse left if left exists
traverse right if right exists
traverse starting from root
return output

verification

implementation

*/

const aRoot = new TreeNode(5);
const aLeft = new TreeNode(4);
aRoot.left = aLeft;
const aRight = new TreeNode(8);
aRoot.right = aRight;
const aLeftLeft = new TreeNode(11);
aLeft.left = aLeftLeft;
const aRightLeft = new TreeNode(13);
aRight.left = aRightLeft;
const aRightRight = new TreeNode(4);
aRight.right = aRightRight;
const aLeftLeftLeft = new TreeNode(7);
aLeftLeft.left = aLeftLeftLeft;
const aLeftLeftRight = new TreeNode(2);
aLeftLeft.right = aLeftLeftRight;
const aRightRightLeft = new TreeNode(5);
aRightRight.left = aRightRightLeft;
const aRightRightRight = new TreeNode(1);
aRightRight.right = aRightRightRight;

console.log(pathSum(aRoot, 22));

/*
specification
input: 
output:
constraints: 
edge cases:

justification

explanation

visualization

approximation

verification

implementation

*/