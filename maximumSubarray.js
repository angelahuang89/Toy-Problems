const maxSubArray = nums => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let pointer = i;
    let curr = 0;
    while (pointer < nums.length) {
      curr += nums[pointer];
      if (curr > max) {
        max = curr;
      }
      pointer++;
    }
  }
  return max;
};

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// specification
// input: array of numbers
// output: largest sum from a contiguous subarray
// constraints: 
// edge cases:

// justification
// to find the largest sum from a continugous subarray

// explanation
// the values in the array will determine the max sum

// visualization

// approximation
// initialize max sum as 0
// initialize current sum as 0
// iterate through array and check if adding the value will increase current sum
// if current sum is greater than max sum, set max sum to current sum
// if current sum is less than max sum, check subarray starting at next number

// verification

// implementation

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([1]));