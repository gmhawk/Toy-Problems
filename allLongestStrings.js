/*
  Given an array of strings, return another array containing all of its longest strings.

  For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
  allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

*/

function allLongestStrings(inputArray) {
    let longest = 0;
    const passed = [];
    inputArray.forEach((elem) => {
        if(elem.length > longest) {
            longest = elem.length;
        }
    })
    inputArray.forEach((elem) => {
        if(elem.length === longest) {
            passed.push(elem);
        }
    })
    return passed;
}
