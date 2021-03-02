var mergeAlternately = function(word1, word2) {
  const longerWord = word1.length > word2.length ? word1 : word2;
  const outputArr = [];
  for (let i = 0; i < longerWord.length; i++) {
      if (word1[i]) {
          outputArr.push(word1[i])
      }
      if (word2[i]) {
          outputArr.push(word2[i]);
      }
  }
  return outputArr.join('');
};

console.log(mergeAlternately('abc', 'pqr'));
