const rob = nums => {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  const totals = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    totals.push(Math.max(nums[i] + totals[i - 2], totals[i - 1]));
  }
  return totals[totals.length - 1];
};

/*
specification
input: array of numbere representing the amount of money in a house
output: the max amount of money you can get from robbing the houses
constraints: cannot visit adjacent houses
edge cases:

justification
to determine the max amount of money that can be robbed in one night

explanation
the order of the amount of money will determine how much can be gotten in one night

visualization

approximation
if there are no houses, return 0
if there is only one house, return the value at that house
for each index i in the nums array, use i in a new array to store the max stealable from houses 0 through i
for each house, the max stealable from houses 0 through the current house depends on what's stealable from the current house and the maxes for the previous two house

verification

implementation

*/

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([2, 2, 4, 3, 2, 5])) // 11
console.log(rob([])); // 0
console.log(rob([0])); // 0
console.log(rob([6, 6, 4, 8, 4, 3, 3, 10])); // 27
