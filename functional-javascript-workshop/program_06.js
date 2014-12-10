function countWords(inputWords) {
  return inputWords.reduce(function(prevArr, currentVal, index1, array) {
    prevArr[currentVal] = ++prevArr[currentVal] || 1
    return prevArr
  },{})
}
module.exports = countWords;