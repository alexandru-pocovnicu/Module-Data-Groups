// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let listCopy=[...list]
  let filteredList=listCopy.filter(x=>+x)
  let sortedList=filteredList.sort((a,b)=>a-b)
  const middleIndex = Math.floor(sortedList.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return middleIndex
}

console.log(calculateMedian([5,1,"g,",3]));


module.exports = calculateMedian;
