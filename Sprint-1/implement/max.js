function findMax(elements) {


const filteredElements=elements.filter(x=>typeof x==="number")


  const sortedElements = filteredElements.sort((a, b) => a - b);

  return sortedElements.reduce((a,b)=>Math.max(a,b),-Infinity)
}

console.log(findMax([]));

module.exports = findMax;
