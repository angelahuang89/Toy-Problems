const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    const start = matrix[i][0];
    const end = matrix[i][matrix[i].length - 1];
    const nextRowStart = matrix[i + 1] ? matrix[i + 1][0] : undefined;
    if (target >= start && target <= end) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return true;
        }
      }
      return false;
    }
    if (target > end && target < nextRowStart) {
      return false;
    }
  }
  return false;
};

// specification
// input: matrix with integers
// each row is sorted
// output: boolean whether target is in matrix or not
// constraints: 
// edge cases:

// justification
// to find whether an integer exists in a matrix

// explanation
// the numbers in the input matrix will determine the output of whether the integer can be found

// visualization

// approximation
// check if number is in matrix using conditionals

// verification

// implementation

const matrix1 =
[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
const target1 = 3;

const matrix2 =
[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
const target2 = 13;

console.log(searchMatrix(matrix1, target1));
console.log(searchMatrix(matrix2, target2));
console.log(searchMatrix([[1]], 1));
