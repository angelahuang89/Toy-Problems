const isPalindrome = x => {
  if (x < 0) return false;
  const digits = [];
  let num = x;
  while(num > 0) {
    const curr = num % 10;
    digits.push(curr);
    num = Math.floor(num / 10);
  }
  let left = 0;
  let right = digits.length - 1;;
  while (left <= right) {
    if (digits[left] !== digits[right]) return false;
    left++;
    right--;
  }
  return true;
};

/*
specification
input: number
output: boolean, true if number is palindrome, false if it is not
constraints:
edge cases:

justification
to determine whethr a number is a palindrome

explanation
the format of the number will determine whether it is a palindrome

visualization

approximation
if number is negative, it is not a palindrome
convert number into array
check that the array is the same front and backwards

verification

implementation

*/

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
