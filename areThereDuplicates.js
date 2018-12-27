function areThereDuplicates() {
  let obj = {};
  for (var i = 0; i < arguments.length; i++) {
    let key = arguments[i];
    if(obj[key]) {
      return true;
    } else {
      obj[key] = 1;
    }
  }
  return false;
}

function areThereDuplicates() {

}


areThereDuplicates('b','c','k', 'c');
