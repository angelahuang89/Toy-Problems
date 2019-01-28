const findAnagrams = (s, p) => {
  const hash = {};
  for (let i = 0; i < p.length; i++) {
    if (hash[p[i]]) {
      hash[p[i]]++;
    } else {
      hash[p[i]] = 1;
    }
  }

  let output = [];
  const length = p.length;
  for (let j = 0; j < s.length - length + 1; j++) {
    const slice = s.slice(j, j + length);
    const currHash = {};
    for (let k = 0; k < slice.length; k++) {
      if (currHash[slice[k]]) {
        currHash[slice[k]]++;
      } else {
        currHash[slice[k]] = 1;
      }
    }
    let flag = true;
    for (let char in hash) {
      if (hash[char] !== currHash[char]) {
        flag = false;
      }
    }
    if (flag) output.push(j);
  }
  return output;
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