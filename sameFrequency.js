function sameFrequency(x, y){
  const num1 = x.toString();
  const num2 = y.toString();
  if(num2.length !== num1.length) return false;
  let obj = {};
  for (let i = 0; i < num1.length; i++) {
    let key = num1[i];
    obj[key] ? obj[key]++ : obj[key] = 1;
  }
  for (let i = 0; i < num2.length; i++) {
    let key = num2[i];
    if(obj[key]) {
      obj[key]--;
    } else {
      return false;
    }
  }
  return true;
}
