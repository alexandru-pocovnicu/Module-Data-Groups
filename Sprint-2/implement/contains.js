function contains(obj,propertyName) {
  
    
if(Object.keys(obj).length!==0){
    return true
}
if (Object.keys(obj) === propertyName) {
  return true;
}
return false
}
console.log(contains({a:"t",k:5},"k"));

module.exports = contains;
