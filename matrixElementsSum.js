/*
matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
matrixElementsSum(matrix) = 9
          [[x, 1, 1, 2],
           [x, 5, x, x],
           [x, x, x, x]]
Thus, the answer is 1 + 5 + 1 + 2 = 9
*/

function matrixElementsSum(matrix) {
    let total = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                if(matrix[i+1]) {
                    matrix[i+1][j] = 0;
                }
            }
            else {
                total += matrix[i][j];
            }
        }
    }
    return total;
}
