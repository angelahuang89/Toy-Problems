// const dailyTemperatures = T => {
//   const output = [];
//   for (let i = 0; i < T.length; i++) {
//     const curr = T[i];
//     for (let j = i + 1; j < T.length; j++) {
//       if (T[j] > curr) {
//         output.push(j - i);
//         break;
//       }
//     }
//     if (output.length !== i + 1) output.push(0);
//   }
//   return output;
// };

const dailyTemperatures = T => {
  const results = [];
  const stack = [];

  for (let i = 0; i < T.length; i++) {
    const curr = T[i];
    while (curr > T[stack[stack.length - 1]]) {
      let last = stack[stack.length - 1];
      results[last] = i - last;
      stack.pop();
    }
    stack.push(i);
  }
  for (let i = 0; i < T.length; i++) {
    if (!results[i]) results[i] = 0;
  }

  return results;
}

// specification
// input: array of numbers representing temperatures
// output: array representing how long it will be until warmer temperatures
// constraints: 
// edge cases:

// justification
// to find out when the next day with warmer temperatures is for any given day

// explanation
// the temperatures in the input array will determine the days until warmer temperatures in the output array

// visualization

// approximation
// for each day, check subsequent days

// verification

// implementation

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]