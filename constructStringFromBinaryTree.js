class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const tree2str = t => {
  let str = '';
  const traverse = node => {
    if (node) {
      str += node.val;
      if (node.left) {
        str += '(';
        traverse(node.left);
        str += ')';
      }
      if (node.right) {
        if (!node.left) str += '()';
        str += '(';
        traverse(node.right);
        str += ')';
      }
    }
  }
  traverse(t);
  return str;
};

// let output = '';
// let queue = [t];
// while (queue.length) {
//   const curr = queue.shift();
//   if (curr) {
//     output += curr.val;
//     queue.push(curr.left)
//     queue.push(curr.right)
//   }
// }
// return output;

// specification
// input: binary tree
// output: string representing preorder traversal of tree
// constraints: don't include unnecessary parentheses
// edge cases

// justification
// to convert a binary tree into string format

// explanation
// the structure of the binary tree will determine the order of the string

// visualization

// approximation
// start from root
// declare an empty string as the output
// traverse the tree depth first and add to the output until there are no more nodes
// return string

// verification
// implementation

// Input: Binary tree: [1,2,3,4]
//        1
//      /   \
//     2     3
//    /    
//   4     

// Output: "1(2(4))(3)"

// Explanation: Originallay it needs to be "1(2(4)())(3()())", 
// but you need to omit all the unnecessary empty parenthesis pairs. 
// And it will be "1(2(4))(3)".
// Example 2:
// Input: Binary tree: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \  
//       4 

// Output: "1(2()(4))(3)"

// Explanation: Almost the same as the first example, 
// except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

const aRoot = new TreeNode(1);
const aLeft = new TreeNode(2);
const aRight = new TreeNode(3);
const aLeftLeft = new TreeNode(4);
aRoot.left = aLeft;
aRoot.right = aRight;
aLeft.left = aLeftLeft;

const bRoot = new TreeNode(1);
const bLeft = new TreeNode(2);
const bLeftRight = new TreeNode(4);
const bRight = new TreeNode(3);
bRoot.left = bLeft;
bLeft.right = bLeftRight;
bRoot.right = bRight;

console.log(tree2str(aRoot));
console.log(tree2str(bRoot));