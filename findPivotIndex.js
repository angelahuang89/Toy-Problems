// var pivotIndex = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const leftArr = nums.slice(0, i);
//         const rightArr = nums.slice(i + 1);
//         if (sumNumbers(leftArr) === sumNumbers(rightArr)) {
//             return i;
//         }
//     }
//     return -1;
// };

const sumNumbers = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
}

const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = sumNumbers(nums.slice(1));
  let index = 0;
  while (index <= nums.length - 1) {
      if (leftSum === rightSum) {
          return index;
      }
      leftSum += nums[index];
      rightSum -= nums[index + 1];
      index++;
  }
  return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]));
