function dedupe(arr) {
if(arr.length===0){
    return []
}
for(let index in arr){
    if(arr[index]!==arr[index+1]){
        return arr
    }
}
}
module.exports=dedupe 