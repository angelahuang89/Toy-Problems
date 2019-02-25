const kClosest = (points, K) => {
  const hash = {};
  const distances = [];
  for (let i = 0; i < points.length; i++) {
      const distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
      hash[distance] = points[i];
      distances.push(distance);
  }  
  distances.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < K; i++) {
    output.push(hash[distances[i]]);
  }
  return output;
};

console.log(kClosest([[1,3],[-2,2]], 1));