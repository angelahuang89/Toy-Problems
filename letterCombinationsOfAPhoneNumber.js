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
    const prevArr= hash[prev];
    const currNum = curr[0];
    const currArr = hash[currNum];
    const comboStr = prev + curr[0];
    const output = [];
    for (let i = 0; i < prevArr.length; i++) {
      for (let j = 0; j < currArr.length; j++) {
        output.push(prevArr[i] + currArr[j]);
      }
    }
    hash[comboStr] = output;
    createCombinations(comboStr, curr.slice(1));
  };

  createCombinations(digits[0], digits.slice(1))

  return hash[digits];
};

// const letterCombinations = function(digits) {
//   if (digits == '') return [];
//   const results = [];
//   findLetterCombinations(digits, 0, '', results);
//   return results;
// };

// const findLetterCombinations = function(digits, startIndex, prefix, results) {
//   if (startIndex == digits.length) {
//     results.push(prefix);
//     return;
//   }
  
//   const map = { 
//     2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 
//     6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
//   };

//   const curr = maps[digits[startIndex]];
//   for (let i = 0; i < curr.length; i++) {
//     const letter = curr[i];
//     prefix += letter;
//     findLetterCombinations(digits, startIndex + 1, prefix, results);
//     prefix = prefix.substring(0, prefix.length - 1);
//   } 
// };

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
