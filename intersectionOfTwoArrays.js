// const intersection = (nums1, nums2) => {
//   const output = [];
//   if (!nums1.length || !nums2.length) return output;
//   const hash = {};
//   for (let i = 0; i < nums1.length; i++) {
//     if (hash[nums1[i]]) {
//       hash[nums1[i]]++;
//     } else {
//       hash[nums1[i]] = 1;
//     }
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (hash[nums2[i]]) {
//       output.push(nums2[i]);
//       delete hash[nums2[i]];
//     }
//   }
//   return output;
// };

const intersection = (nums1, nums2) => {
  const output = [];
  const hash = {};
  for (let i = 0; i < nums1.length; i++) {
    hash[nums1[i]] = 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]] === 1) {
      output.push(nums2[i]);
      hash[nums2[i]]++;
    }
  }
  return output;
};

// specification
// input: two arrays of integers
// output: an array of the common elements in both arrays
// constraints: only unique results
// edge cases:

// justification
// to find the intersection of two array

// explanation
// the elements within each array will determine which elements are common between both

// visualization

// approximation
// declare empty output array
// declare empty object as hash
// iterate through first array and hash every element in it
// iterate through second array and add unique elements to outpu and delete entry in hash
// return output array

// verification
// implementation

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));