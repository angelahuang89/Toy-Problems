class Interval {
   constructor(start, end) {
     this.start = start;
     this.end = end;
   }
 }

// const merge = intervals => {
//   const output = [];
//   if (!intervals.length) return output;
//   const sorted = intervals.sort((a, b) => a[0] - b[0]);
//   let start = sorted[0][0];
//   let end = sorted[0][1];
//   for (let i = 1; i < sorted.length; i++) {
//     const curr = sorted[i];
//     if (curr[0] >= start && curr[0] <= end) {
//       end = Math.max(end, curr[1]);
//     } else {
//       output.push([start, end]);
//       start = curr[0];
//       end = curr[1];
//     }
//   }
//   output.push([start, end]);
//   return output;
// };

const merge = intervals => {
  const output = [];
  if (!intervals.length) return output;
  const sorted = intervals.sort((a, b) => a.start - b.start);
  let start = sorted[0].start;
  let end = sorted[0].end;
  for (let i = 1; i < sorted.length; i++) {
    const curr = sorted[i];
    if (curr.start >= start && curr.start <= end) {
      end = Math.max(end, curr.end);
    } else {
      output.push(new Interval(start, end));
      start = curr.start;
      end = curr.end;
    }
  }
  output.push(new Interval(start, end));
  return output;
};

// specification
// input: array of tuples representing intervals
// output: array of intervals with all overlapping intervals merged
// constraints:
// edge cases:

// justification
// to merge overlapping intervals in an array of intervals

// explanation
// the overlapping intervals in the input will determine the merged interval output

// visualization

// approximation
// declare empty output array
// sort array of intervals
// store current start of interval
// store current end of interval
// iterate through array of intervals
// check if start of current interval is within the stored start and end interval
  // update end interval
// if current interval doesn't overlap
  // push result into output
  // set the start and end interval to the current interval's start and end
// return output

// verification

// implementation

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));