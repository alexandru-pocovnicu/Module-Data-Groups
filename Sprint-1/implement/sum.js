function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  if (elements.length === 1) {
    return elements[0];
  }

  const filteredElements = elements.filter(
    (element) => typeof element === "number"
  );
  if (filteredElements.length === 0) {
    return NaN;
  }
  let addElements = 0;
  for (let element of filteredElements) {
    addElements = addElements + element;
  }

  return addElements;
}
module.exports = sum;

