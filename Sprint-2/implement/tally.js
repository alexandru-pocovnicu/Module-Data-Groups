function tally(array) {
    
  let obj = {};
  array.forEach((elem) => {
    obj[elem] = (obj[elem] || 0) + 1;
  });
  return obj;
}
console.log(tally("asd"));



module.exports = tally;
