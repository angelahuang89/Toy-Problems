const letterCombinations = digits => {
  if (digits === '') return [];
  
  const hash = {
    2: ['a', 'b' ,'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  if (hash[digits]) return hash[digits];

  const createCombinations = (prev, curr) => {
    if (curr === '') return;
    const preconstr = hash[prev];
    const currNum = curr[0];
    const currArr = hash[currNum];
    const comboStr = prev + curr[0];
    const output = [];
    for (let i = 0; i < preconstr.length; i++) {
      for (let j = 0; j < currArr.length; j++) {
        output.push(preconstr[i] + currArr[j]);
      }
    }
    hash[comboStr] = output;
    createCombinations(comboStr, curr.slice(1));
  };

  createCombinations(digits[0], digits.slice(1))

  return hash[digits];
};

// const prevStr = str.slice(0, index + 1);
// const prev = hash[prevStr];
// const currStr = str.slice(index + 1, index + 2);
// const curr = hash[currStr];
// const comboStr = str.slice(0, index + 2);
// if (!hash[comboStr]) hash[comboStr] = [];
// for (let i = 0; i < prev.length; i++) {
//   for (let j = 0; j < curr.length; j++) {
//     hash[comboStr].push(prev[i] + curr[j]);
//   }
// }
// if (index + 1 < str.length - 1) createCombinations(str, index++)

/*
specification
input: string containing digits from two to nine inclusive
output: array of all possible letter combinations that the digits could represent
constraints: 
edge cases:

justification
to find all the combinations a number could represent

explanation
the input digits will determine the output combinations

visualization

approximation
create a hash to store each number and the letters it corresponds to

verification

implementation

*/

console.log(letterCombinations('23')); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
