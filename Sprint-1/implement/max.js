function findMax(elements) {
  if (elements.length === 0) {
    return Infinity;
  }

  if (elements.length === 1) {
    return elements[0];
  }
  const sortedElements = elements.sort((a, b) => a - b);

  return sortedElements.reduce((a,b)=>Math.max(a,b))
}

console.log(findMax([-5, -1, -7, -3]));

module.exports = findMax;
