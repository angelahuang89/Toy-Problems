const singleNumber = nums => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (hash[curr]) {
      hash[curr]++;
    } else {
      hash[curr] = 1;
    }
  }
  for (let num in hash) {
    if (hash[num] === 1) return Number(num);
  }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4

// specification
// input: array of integers
// output: integer that appears only once in array
// constraints: integers
// edge cases:

// justification
// to find the number in an array that appears only once

// explanation
// the array will determine which integer within is unique

// visualization

// approximation
// declare hash to count occurences of each integer
// find integer that only appears once

// verification

// implementation