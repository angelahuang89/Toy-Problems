// const getRow = rowIndex => {
//   const output = [[1], [1, 1]];
//   if (rowIndex === 0 || rowIndex === 1) return output[rowIndex];
//   for (let i = 2; i <= rowIndex; i++) {
//     const row = [1];
//     const prev = output[i - 1];
//     for (let j = 0; j < prev.length - 1; j++) {
//       row.push(prev[j] + prev[j + 1]);
//     }
//     row.push(1);
//     output.push(row);
//   }
//   return output[rowIndex];
// };

const getRow = rowIndex => {
  if (rowIndex === 0) return [1];
  if ( rowIndex === 1) return [1, 1];
  let prev = [1, 1];
  let row;
  for (let i = 2; i <= rowIndex; i++) {
    row = [1];
    for (let j = 0; j < prev.length - 1; j++) {
      row.push(prev[j] + prev[j + 1]);
    }
    row.push(1);
    prev = row;
  }
  return row;
};

/*
specification
input: integer, representing row in pascal's triangle to return
output: array that represents the row that correpsonds to the input integer in pascal's triangle
constraints: rowIndex is non negative, max rowIndex is 33, row indices start at 0
optimize for O(rowIndex) extra space
edge cases:

justification
to find the numbers that marowIndexe up the specified row in pascal's triangle

explanation
the input integer will determine the output array of numbers

visualization

approximation
declare empty output arry
loop from 0 to rowIndex
if rowIndex is 0 return [1]
if rowIndex is 1 return [1, 1]
for all other rowIndex, start with [1] and add the previous rows sums together and push into array, and end with pushing in 1
return the row at rowIndex

verification
implementation
*/

console.log(getRow(3)) // [1, 3, 3, 1];
console.log(getRow(33));