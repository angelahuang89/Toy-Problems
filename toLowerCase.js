const toLowerCase = str => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 32));
    } else {
      arr.push(str.charAt(i));
    }
  }
  return arr.join('');
}

// specification
// input: string
// output: string with all characters in lower case
// constraints:
// edge cases:

// justification
// to convert a string into all lower case

// explanation
// the characters in the input string will determine which character need to be converted to lower case in the output string

// visualization

// approximation
// declare empty array to store converted characters
// loop through string
  // use charCodeAt difference to convert charaters
// return output array joined by empty space

// verification

// implementation

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));