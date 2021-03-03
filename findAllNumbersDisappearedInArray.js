var findDisappearedNumbers = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
  }
  const output = [];
  for (let j = 1; j <= nums.length; j++) {
      if (!set.has(j)) {
          output.push(j);
      }
  }
  return output;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
