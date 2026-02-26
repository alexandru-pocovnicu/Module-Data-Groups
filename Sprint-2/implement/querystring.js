function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  console.log(keyValuePairs);
  

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");
    if(indexOfEqual===-1){
      queryParams[pair]=""
    }else{
    const key = [pair.slice(0,indexOfEqual)];
    const value = pair.slice(indexOfEqual+1);
    queryParams[key]=value
    }
  }

  return queryParams;
}
console.log(parseQueryString("equation"));


module.exports = parseQueryString;
