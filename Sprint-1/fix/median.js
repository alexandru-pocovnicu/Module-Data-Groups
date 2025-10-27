// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);
  const listMiddleIndex = sortedList[middleIndex];
  const median = sortedList.slice(middleIndex)[0];

  console.log(listMiddleIndex);
  console.log(median);
if (!sortedList.every(element=>typeof element ==="number") ){
  return null
}
  if (sortedList.length % 2 === 0) {
    return (listMiddleIndex + (listMiddleIndex - 1)) / 2;
  }
  return median;
}
console.log(calculateMedian([1, 6, 9, 12]));
module.exports = calculateMedian;
