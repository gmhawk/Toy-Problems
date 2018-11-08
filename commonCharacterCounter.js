/*
  Given two strings, find the number of common characters between them.

  Example

  For s1 = "aabcc" and s2 = "adcaa", the output should be
  commonCharacterCount(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
    const firstCount = {};
    let commonCounts = 0;
    for(let i = 0; i < s1.length; i++) {
        if(firstCount[`${s1[i]}`]) {
            firstCount[`${s1[i]}`] += 1;
        }
        else {
            firstCount[`${s1[i]}`] = 1;
        }
    }
    for(let i = 0; i < s2.length; i++) {
        if(firstCount[`${s2[i]}`]) {
            if(firstCount[`${s2[i]}`] > 0) {
                firstCount[`${s2[i]}`] -= 1;
                commonCounts += 1;
            }
        }
    }
    return commonCounts;
}
