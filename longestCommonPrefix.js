// const longestCommonPrefix = strs => {
//   let hash = {};
//   for (let i = 0; i < strs.length; i++) {
//     const word = strs[i];
//     let curr = '';
//     for (let j = 0; j < word.length; j++) {
//       curr += word[j];
//       if (hash[curr]) {
//         hash[curr]++;
//       } else {
//         hash[curr] = 1;
//       }
//     }
//   }
//   let prefix = '';
//   for (let word in hash) {
//     if (hash[word] === strs.length && word.length > prefix.length) {
//       prefix = word;
//     }
//   }
//   return prefix;
// };

const longestCommonPrefix = strs => {
  let prefix = '';
  if (!strs.length) return prefix;
  prefix = strs[0];
  for(let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
    if (!prefix) break;
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // 'fl'
console.log(longestCommonPrefix(["dog","racecar","car"])); // ''

// specification
// input: array of strings
// output: longest common prefix amongst strings
// constraints: if no common prefix, return an empty string
// edge cases: 

// justification
// to find the longest common prefix in an array of strings

// explanation
// the array of strings will determine what the common prefix is, if any

// visualization

// approximation
// declare hash

// verification


// implementation

