// const threeSum = nums => {
//   const output = [];
//   const sorted = nums.sort((a, b) => a - b);
//   const hash = {};
//   for (let i = 0; i < sorted.length - 2; i++) {
//     const curr = sorted[i];
//     let left = 0;
//     let right = sorted.length - 1;
//     while (left < right) {
//       if (left === i) left++;
//       if (right === i) right--;
//       if (left === right) break;
//       const sum = curr + sorted[left] + sorted[right];
//       if (sum === 0) {
//         const triplet = [curr, sorted[left], sorted[right]].sort((a, b) => a - b);
//         if (!hash[triplet]) {
//           output.push(triplet);
//           hash[triplet] = true;
//         }
//       }
//       if (sum > 0) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   return output;
// };

// public List<List<Integer>> threeSum(int[] num) {
//   Arrays.sort(num);
//   List<List<Integer>> res = new LinkedList<>(); 
//   for (int i = 0; i < num.length-2; i++) {
//       if (i == 0 || (i > 0 && num[i] != num[i-1])) {
//           int lo = i+1, hi = num.length-1, sum = 0 - num[i];
//           while (lo < hi) {
//               if (num[lo] + num[hi] == sum) {
//                   res.add(Arrays.asList(num[i], num[lo], num[hi]));
//                   while (lo < hi && num[lo] == num[lo+1]) lo++;
//                   while (lo < hi && num[hi] == num[hi-1]) hi--;
//                   lo++; hi--;
//               } else if (num[lo] + num[hi] < sum) lo++;
//               else hi--;
//          }
//       }
//   }
//   return res;
// }

const threeSum = nums => {
  const output = [];
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = sorted.length - 1;
      const sum = 0 - sorted[i];
      while (left < right) {
        if (sorted[left] + sorted[right] === sum) {
          output.push([sorted[i], sorted[left], sorted[right]]);
          while (left < right && sorted[left] === sorted[left + 1]) left++;
          while (left < right && sorted[right] === sorted[right - 1]) right--;
          left++;
          right--;
        } else if (sorted[left] + sorted[right] < sum) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return output;
}

// specification
// input: array of integers
// output: array of arrays of unique triplets that sum to zero
// constraints: no duplicate triplets
// edge cases:

// justification
// to find all unique triplets in an array that sum to zero

// explanation
// the input array will determine the triplets that add up to zero

// visualization

// approximation
// declare output array
// sort the array
// loop through sorted array
// have two pointers on the smallest and largest elements in array
// add current element and the small and large elements and move pointers
// if a triplet is found, add it to output array

// verification

// implementation

const testArray = [-1, 0, 1, 2, -1, -4];

// solution:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

console.log(threeSum(testArray));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
console.log(threeSum([-2,0,0,2,2]));