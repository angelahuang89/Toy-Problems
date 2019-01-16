const islandPerimeter = grid => {
  let perimeter = 0;
  const queue = [];
  let found = false;
  for (let i = 0; i < grid.length; i++) {
    if (found) break;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
        found = true;
        break;
      }
    }
  }
  const visited = {};
  while (queue.length) {
    let curr = queue.shift();
    let x = curr[0];
    let y = curr[1];
    if (!visited[`${x},${y}`]) {
      visited[`${x},${y}`] = true;
      // check up
      const up = x - 1;
      if (grid[up] && grid[up][y] === 1 && !visited[`${up},${y}`]) {
        queue.push([up, y]);
      } else if (!visited[`${up},${y}`]) {
        perimeter++;
      }
      // check down
      const down = x + 1;
      if (grid[down] && grid[x + 1][y] === 1 && !visited[`${down},${y}`]) {
        queue.push([down, y]);
      } else if (!visited[`${down},${y}`]) {
        perimeter++;
      }
      // check left
      const left = y - 1;
      if (grid[x][left] === 1 && !visited[`${x},${left}`]) {
        queue.push([x, left]);
      } else if (!visited[`${x},${left}`]){
        perimeter++;
      }
      // check right
      const right = y + 1;
      if (grid[x][right] === 1 && !visited[`${x},${right}`]) {
        queue.push([x, right]);
      } else if (!visited[`${x},${right}`]){
        perimeter++;
      }
    }
  }
  return perimeter;
};

// const islandPerimeter = grid => {
//   let perimeter = 0;
//   for(let i = 0; i < grid.length; i++) {
//     for(let j = 0; j < grid[i].length; j++) {
//       if(grid[i][j]) {
//         perimeter += 4;
//         if(i > 0 && grid[i - 1][j]) perimeter -= 1;
//         if(i < grid.length - 1 && grid[i + 1][j]) perimeter -= 1;
//         if(j > 0 && grid[i][j - 1]) perimeter -= 1;
//         if(j < grid[0].length - 1 && grid[i][j + 1]) perimeter -= 1;
//       }
//     }
//   }
//   return perimeter;
// };

// specification
// input: matrix of 1s and 0s, 1 is land and 0 is water
// output: perimter of the islange
// constraints: cells are connected horizontally and vertically, not diagonally
// there is only one island
// no lakes
// edge cell has side length of 1
// rectangular grid
// width and height less than or equal to 100
// edge cases:

// justification
// to determine the perimeter of the island

// explanation
// the shape of the island will determine its perimeter

// visualization

// approximation
// declare perimeter variable as 0
// declare queue as empty array
// iterate through grid
// if land is found
// add cell to queue
// check directions
// while queue is not empty
// shift off queue
// mark cell
// check up
  // if no up, increment perimeter
  // if up, add cell to queue
// check down
  // if no down, increment perimeter
  // if up, add cell to queue
// check left
  // if no left, increment perimeter
  // if up, add cell to queue
// check right
  // if no right, increment perimeter
  // if up, add cell to queue
// return perimeter

// verification

// implementation

const testInput =
[[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]];

console.log(islandPerimeter(testInput)); // 16
console.log(islandPerimeter([[1,1], [1,1]])); // 
