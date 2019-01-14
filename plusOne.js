const plusOne = digits => {
  let index = digits.length - 1;
  let curr = digits[index] + 1;
  if (curr === 10) {
    while(curr === 10) {
      digits[index] = 0;
      index--;
      curr = digits[index] + 1;
    }
    index < 0 ? digits.unshift(1) : digits[index] = curr;
  } else {
    digits[index] = curr;
  }
  return digits;
};

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]

// specification
// input: number represented by an array of digits
// output: number represnted by an array incremented by one
// constraints: the integer does not contain any leading zero
// edge cases:

// justification
// to add one to a number represented by an array

// explanation
// the number represented in the array will determine the number that is the result

// visualization

// approximation
// start from end of array
// add one and if the result is ten, add one to the next digit
// return array

// verification

// implementation

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));