function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
    return false;
  } else {
    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
    }
    for (var i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if (lookup[letter]) {
        lookup[letter]--;
      } else {
        return false;
      }
    }
    return true;
  }
}
