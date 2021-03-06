const findMin = nums => {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] >= nums[low]) {
      low = mid + 1;
    }
    if (nums[mid] <= nums[high]) {
      high = mid - 1;
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
  }  
};

// const findMin = nums => {
//   let left = 0;
//   let right = nums.length - 1;
  
//   while(left + 1 < right){
//     const mid = left + Math.floor((right - left) / 2);
//     if (nums[mid] >= nums[right]) {
//       left = mid;
//     } else{
//       right = mid;
//     }
//   }
  
//   if (nums[left] > nums[right]) {
//     return nums[right];
//   } else{
//     return nums[left];
//   }
// };

// specification
// input: rotated sorted array of integers 
// output: minimum element in array
// constraints: no duplicates
// edge cases:

// justification
// to find the minimum element in a rotated sorted array

// explanation
// the input rotated array will determine the output minimum element

// visualization

// approximation
// binary search

// verification

// implementation

console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
