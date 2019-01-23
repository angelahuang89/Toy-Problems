const sortedSquares = A => {
  const squared = [];
  let negativePointer;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) negativePointer = i;
    squared.push(A[i]**2);
  }
  let positivePointer = negativePointer + 1;
  const output = [];
  if (negativePointer >= 0) {
    while (negativePointer >= 0 && positivePointer < squared.length) {
      if (squared[negativePointer] < squared[positivePointer]) {
        output.push(squared[negativePointer]);
        negativePointer--;
      } else {
        output.push(squared[positivePointer]);
        positivePointer++;
      }
    }
    for (let i = negativePointer; i >= 0; i--) {
      output.push(squared[i]);
    }
    for (let i = positivePointer; i < squared.length; i++) {
      output.push(squared[i]);
    }
    return output;
  } else {
    return squared;
  }
};

/*
specification
input: array of sorted integers in increasing order
output: array of the squares of the sorted integers sorted in increasing order
constraints:
edge cases:

justification:
to square an array of integers and sort the results in increasing order

explanation
the input array of integers will determine the output array

visualization

approximation
loop through integers and square them
square the integers
if there are negatives keep track of the the index of where they are
declare empty output array
populate an output array based on whether there are negative numbers
return output array

verification

implementation

*/

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]
console.log(sortedSquares([-2,0])); // [0,4]