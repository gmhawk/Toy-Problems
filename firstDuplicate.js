/*
Given an array a that contains only numbers in the range from 1 to a.length,
find the first duplicate number for which the second occurrence has the minimal index.
In other words, if there are more than 1 duplicated numbers,
return the number for which the second occurrence has a smaller index
than the second occurrence of the other number does. 
If there are no such elements, return -1.
*/

function firstDuplicate(a) {
    let storage = {};
    for(let i = 0; i < a.length; i++) {
        if(storage[`${a[i]}`]) {
            storage[`${a[i]}`] += 1;
            if(storage[`${a[i]}`] === 2) {
                return a[i];
            }
        }
        else {
            storage[`${a[i]}`] = 1;
        }
    }
    return -1;
}
