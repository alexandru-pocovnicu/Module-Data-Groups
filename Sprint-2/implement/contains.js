function contains(obj,propertyName) {
  
    
if(Object.keys(obj).length===0){
    return false
}
if (Object.keys(obj).includes(propertyName)) {
  return true;
}
return false
}
console.log(contains({a:"t",k:5},"o"));

module.exports = contains;
