class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const constructMaximumBinaryTree = nums => {
  if (!nums.length) return null;
  
  const max = Math.max(...nums);
  const root = new TreeNode(max);
  const index = nums.indexOf(max);
  const leftArr = nums.slice(0, index);
  const rightArr = nums.slice(index + 1);
  
  const traverse = (node, leftArr, rightArr) => {
    if (leftArr.length) {
      const leftMax = Math.max(...leftArr);
      const leftIndex = leftArr.indexOf(leftMax);
      const leftNode = new TreeNode(leftMax);
      node.left = leftNode;
      const left = leftArr.slice(0, leftIndex);
      const right = leftArr.slice(leftIndex + 1);
      traverse(node.left, left, right);
    }
    if (rightArr.length) {
      const rightMax = Math.max(...rightArr);
      const rightIndex = rightArr.indexOf(rightMax);
      const rightNode = new TreeNode(rightMax);
      node.right = rightNode;
      const left = rightArr.slice(0, rightIndex);
      const right = rightArr.slice(rightIndex + 1);
      traverse(node.right, left, right);
    }
  }

  traverse(root, leftArr, rightArr);

  return root;
};

// const constructMaximumBinaryTree = nums => {
//   return construct(nums, 0, nums.length);
// };

// const construct = (nums, l, r) => {
//   if(l === r) return null;
//   const maxIndex = findMaxIndex(nums, l, r);
//   const root = new TreeNode(nums[maxIndex]);
//   root.left = construct(nums, l, maxIndex);
//   root.right = construct(nums, maxIndex + 1, r);
//   return root;
// }

// const findMaxIndex = (nums, left, right) => {
//   let maxIndex = left;
//   for(let i = left; i < right; i++) {
//     if(nums[i] > nums[maxIndex]) {
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }

// const constructMaximumBinaryTree = nums => {
//   if (!nums.length) return null;
  
//   const max = Math.max(...nums);
//   const index = nums.indexOf(max);
//   const left = nums.slice(0, index);
//   const right = nums.slice(index + 1);
  
//   const root = new TreeNode(max);
//   root.left = constructMaximumBinaryTree(left);
//   root.right = constructMaximumBinaryTree(right);
  
//   return root;
// };

/*
specification
input: integer array with no duplicates
output: maximum binary tree, root is the max number in the array
left subtree is the maximum tree constructed from the left subarray
right subtree is the maximum tree constructed from the right subarray
return root node of tree
constraints: 
edge cases:

justification
convert array into maximum binary tree

explanation
the order of the input array will determine the structure of the binary tree

visualization

approximation
find the max number in the array and set it as the root
repeat for rest of tree

verification

implementation

*/

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));