function contains(obj,property) {
if(Object.keys(obj).length===0){
    return false
}
if(property in obj){
    return true
}

}

module.exports = contains;


