// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  if (list.length === 0) {
    return null;
  }
  const sortedList = [...list].sort((a, b) => a - b);
  const filteredList=sortedList.filter((element)=> typeof element==="number")
  const middleIndex = Math.floor(filteredList.length / 2);
  const listMiddleIndex = filteredList[middleIndex];
  const median = filteredList.slice(middleIndex)[0];

 
  
if (filteredList.length===0 ){
  return null
}

  if (filteredList.length % 2 === 0) {
    return (listMiddleIndex + (listMiddleIndex - 1)) / 2;
  }
  return median;
}
console.log(calculateMedian([1, 6, 9, 12]));
module.exports = calculateMedian;
