const checkValidString = s => {
  let low = 0;
  let high = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === '(') {
      low++;
      high++;
    } else if (curr === ')') {
      if (low > 0) low--;
      high--;
    } else {
      if (low > 0) low--;
      high++;
    }
    if (high < 0) return false;
  }
  return low === 0;
}

// const checkValidString = s => {
//   const openStack = [];
//   const wildStack = [];
//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];
//     if (curr === '(') {
//       openStack.push(curr);
//     }
//     if (curr === ')') {
//       if (openStack.length) {
//         openStack.pop();
//       } else if (wildStack.length) {
//         wildStack.pop();
//       }
//     }
//     if (curr === '*') {
//       wildStack.push(curr);
//     }
//   }
//   return openStack.length === 0 || wildStack.length >= openStack.length;
// };

// const checkValidString = s => {
//   if (!s.length) return true;
//   const counts = [];
//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];
//     if (curr === '(') {
//       if (!counts.length) {
//         counts.push(1);
//       } else {
//         for (let j = 0; j < counts.length; j++) {
//           counts[j]++;
//         }
//       }
//     }
//     if (curr === ')') {
//       for (let k = 0; k < counts.length; k++) {
//         if (counts[k] > 0) {
//           counts[k]--;
//         } else {
//           counts[k] = 'not valid';
//         }
//       }
//     }
//     if (curr === '*') {
//       const copy = counts.slice();
//       if (!copy.length) {
//         counts.push(0);
//         counts.push(1);
//       } else {
//         for (let l = 0; l < copy.length; l++) {
//           const curr = copy[l];
//           counts.push(curr + 1);
//           if (curr > 0) counts.push(curr - 1);
//           counts.push(curr);
//         }
//       }
//     }
//   }
//   return counts.indexOf(0) > -1;
// };

// const checkValidString = s => {
//   let openCount = 0;
//   let wildCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];
//     if (curr === '(') {
//       openCount++;
//     }
//     if (curr === ')') {
//       if (openCount > 0) {
//         openCount--;
//       } else if (wildCount > 0) {
//         wildCount--;
//       } else {
//         return false;
//       }
//     }
//     if (curr === '*' && openCount > 0) {
//       openCount--;
//     } else {
//       wildCount++;
//     }
//   }
//   return openCount === 0;
// };

// specification
// input: string containing only (, ), and *
// output: boolean, whether the string is valid parenthesis expression
// constraints: * can be (, ) or empty string
// edge cases

// justification
// to determnine whether a string is a valid parenthesis expression

// explanation
// the order of the characters in the input string will determine if it is valid

// visualization

// approximation
// declare stack for if * is (
// declare stack for if * is )
// declare stack for if * is empty string
// iterate through string
  // if character is (, add to stack
  // if character is ), pop from stack
  // if character is *, add for ( stack, pop for ) stack, and do nothing for empty string stack
// return true if any of the stacks are empty

// verification

// implementation

console.log(checkValidString('()')); // true
console.log(checkValidString('(*)')); // true
console.log(checkValidString('(*))')); // true
console.log(checkValidString(')(')); // false
console.log(checkValidString('(')); // false
console.log(checkValidString(')')); // false
console.log(checkValidString('(((******))')); // true
console.log(checkValidString('')); // true
console.log(checkValidString('*')); // true
console.log(checkValidString('(((((()*)(*)*))())())(()())())))((**)))))(()())()')); // false
console.log(checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*')) // false
console.log(checkValidString('(())()())(*))(((((())()*))**))**()(*(()()*)(**(())()**)((**(()(((()()**)())*(*))(())()()*')); // false