class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

const levelOrder = root => {
  const output = [];
  if (!root) return output;
  let queue = root.children;
  output.push([root.val])
  while (queue.length) {
    const level = [];
    for (let i = 0; i < queue.length; i++) {
      level.push(queue[i].val);
      queue.push(...queue[i].children);
    }
    output.push(level);
  }
  return output;
};

// specification
// input: n-ary level tree
// output: array of arrays representing each level of the tree
// constraints:
// edge cases:

// justification
// to print out the nodes at each level of the tree

// explanation
// the structure of the input n-ary tree will determine the output array of arrays that represent the values at each level

// visualization

// approximation
// declare empty output array
// if there is no root, return output
// initialize queue with root in it
// while the queuehas elements
  // declare empty array for current level
  // add all node values from current level
  // add each node to the queue
// return output

// verification
// implementation

const aRoot = new Node(1, []);
const aLeft = new Node(3, []);
const aMiddle = new Node(2, []);
const aRight = new Node(4, []);
aRoot.children.push(aLeft, aMiddle, aRight);
aLeftLeft = new Node(5, []);
aLeftRight = new Node(6, []);
aLeft.children.push(aLeftLeft, aLeftRight);

const expected = [
  [1],
  [3,2,4],
  [5,6]
]

console.log(levelOrder(aRoot));