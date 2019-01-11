const romanToInt = str => {
  let total = 0;
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for (let i = 0; i < str.length; i++) {
    const currStr = str[i];
    const currVal = hash[currStr];
    if (hash[str[i + 1]] > hash[currStr]) {
      total -= currVal;
    } else {
      total += currVal;
    }
  }
  return total;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994