function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const indexOfEqual = pair.indexOf("=");
    const key = [pair.slice(0,indexOfEqual)];
    const value = pair.slice(indexOfEqual+1);
    queryParams[key]=value
   
  }

  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));


module.exports = parseQueryString;
