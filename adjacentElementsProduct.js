/*
Given an array of integers,
find the pair of adjacent elements that has the largest product and return that product.

EXAMPLE:

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.
*/

function adjacentElementsProduct(inputArray) {
    let highest = inputArray[0] * inputArray[1];
    for(let i = 1; i < inputArray.length; i++) {
        if(inputArray[i + 1]) {
            let current = inputArray[i] * inputArray[i+1];
            if(current > highest) {
                highest = current;
            }
        }
    }
    return highest;
}
