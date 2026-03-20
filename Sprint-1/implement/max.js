function findMax(elements) {
  const filteredElements = elements.filter(
    (x) => typeof x === "number" && !Number.isNaN(x)
  );
  return  Math.max(...filteredElements)
}

module.exports = findMax;
