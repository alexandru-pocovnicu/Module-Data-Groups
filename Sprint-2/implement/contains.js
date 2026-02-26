function contains(obj, propertyName) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Invalid object");
  }
  if (Object.keys(obj).length === 0) {
    return false;
  }
  if (Object.keys(obj).includes(propertyName)) {
    return true;
  }
  return false;
}
//console.log(contains({w:0}, [w]));

module.exports = contains;
