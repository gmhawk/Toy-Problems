/*
	Given an array strings, determine whether it follows the sequence given in the patterns array. 
	In other words, there should be no i and j for which strings[i] = strings[j] and
	 patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].
	 
	Example:
	For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
	areFollowingPatterns(strings, patterns) = true;
	
	For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
	areFollowingPatterns(strings, patterns) = false.
*/
function areFollowingPatterns(strings, patterns) {
    const stringsObj = {};
    const patternObj = {};
    const objectify = (arr, obj) => {
        for(let i = 0; i < arr.length; i++) {
            if(obj[`${arr[i]}`]) {
                obj[`${arr[i]}`] += `${i}`;
            } else {
                obj[`${arr[i]}`] = "";
                obj[`${arr[i]}`] += `${i}`;
            }
        }
    }
    objectify(strings, stringsObj);
    objectify(patterns, patternObj);
    const stringKeys = Object.keys(stringsObj);
    const patternKeys = Object.keys(patternObj);
    for(let j = 0; j < stringKeys.length; j++) {
        console.log(stringsObj[`${stringKeys[j]}`]);
        if(stringsObj[`${stringKeys[j]}`] !== patternObj[`${patternKeys[j]}`]) {
            return false;
        }
    }
    return true;
}
