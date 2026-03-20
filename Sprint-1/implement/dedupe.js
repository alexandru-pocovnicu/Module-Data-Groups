function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  for (let element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = dedupe;
