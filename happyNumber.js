const happyNumber = n => {
  const hash = {};
  let curr = sumSquaredDigits(n);
  while (!hash[curr]) {
    hash[curr] = true;
    if (curr === 1) return true;
    curr = sumSquaredDigits(curr);
  }
  return false;
};

const sumSquaredDigits = num => {
  let sum = 0;
  while (num) {
    const curr = num % 10;
    sum += curr * curr;
    num = Math.floor(num / 10);
  }
  return sum;
}


/*
specification
input: number
output: boolean, true if number is happy, false if not
constraints: 
edge cases:

justification:
to see if a number is happy

explanation
the properties of the input will determine the output

visualization

approximation
create helper function to sum the squares of the digits in a number
use hash to check if a sum has occurred before
if the sum is 1, return true
if a sum is in the hash, return false

verification

implementation
*/

console.log(happyNumber(19));