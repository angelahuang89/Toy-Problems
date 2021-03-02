// const findAnagrams = (s, p) => {
//   const hash = {};
//   for (let i = 0; i < p.length; i++) {
//     if (hash[p[i]]) {
//       hash[p[i]]++;
//     } else {
//       hash[p[i]] = 1;
//     }
//   }

//   let output = [];
//   const length = p.length;
//   for (let j = 0; j < s.length - length + 1; j++) {
//     const slice = s.slice(j, j + length);
//     const currHash = {};
//     for (let k = 0; k < slice.length; k++) {
//       if (currHash[slice[k]]) {
//         currHash[slice[k]]++;
//       } else {
//         currHash[slice[k]] = 1;
//       }
//     }
//     let flag = true;
//     for (let char in hash) {
//       if (hash[char] !== currHash[char]) {
//         flag = false;
//       }
//     }
//     if (flag) output.push(j);
//   }
//   return output;
// };

// const findAnagrams = (s, p) => {
//   const result = [];
//   if (p.length > s.length) return result;

//   const hash = {};
//   for (let i = 0; i < p.length; i++) {
//     if (hash[p[i]]) {
//       hash[p[i]]++;
//     } else {
//       hash[p[i]] = 1;
//     }
//   }

//   let count = Object.keys(hash).length;

//   let begin = 0, end = 0;

//   while (end < s.length) {
//     const char = s[end];
//     if (hash[char]) {
//       hash[char]--;
//       if (hash[char] === 0) count--;
//     }
//     end++;

//     while (count === 0) {
//       const temp = s[begin];
//       if (hash[temp]) {
//         hash[temp]++;
//         if (hash[temp] > 0) {
//           count++;
//         }
//       }
//       if (end - begin === s.length) {
//         result.push(begin);
//       }
//       begin++;
//     }
//   }
// };

var findAnagrams = function(s, p) {
  const map = new Map();
  let left = 0;
  let result = [];
  [...p].forEach(char => {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  });
  let counter = map.size;
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (map.has(currChar)) {
      map.set(currChar, map.get(currChar) - 1);
      if (map.get(currChar) === 0) counter--;
    }
    while (counter === 0) {
      if (i - left + 1 === p.length) {
        result.push(left);
      }
      const leftChar = s[left];
      if (map.has(leftChar)) {
        if (map.get(leftChar) === 0) {
          counter++;
        }
        map.set(leftChar, map.get(leftChar) + 1);
      }
      left++;
    }
  }
  return result;
};

/*
specification
input: two strings, one to search in and one the search for
output: the indices of hte appearances of anagrams of p in s
constraints: 
edge cases:

justification
to find the start indices of all occurrences of anagrams of p in s

explanation
the structure of string s will determine where anagrams of p appear in s

visualization

approximation
initialize count at 0
hash p
iterate through s
check substrings to see if they match
increment count if there is a match
return count

verification

implementation

*/

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));