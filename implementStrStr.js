const strStr = (haystack, needle) => {
  if (!haystack.length && needle.length) return -1;
  if (!haystack.length || !needle.length) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) return i;
    }
  }
  return -1;
}

/*
specification
input: two strings, one to be searched, the other what is to be searched
output: index of first occurence of target string, -1 if not in string
constraints:
edge cases: if string is empty return 0

justification
to find the first occurence of a target in a string

explanation
the input string will determine whether the target is in the string

visualization

approximation
loop through string
when the first character of the target is find, see if there is a match
return -1 if not found

verification

implementation

*/

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));

