
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let resultArray = [];
    if (matrix === [] || matrix === undefined) { return resultArray; };
    for (let i = 0; i < matrix.length; i++) {
        if ((i % 2) === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                resultArray.push(matrix[i][j]);
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                resultArray.push(matrix[i][j]);
            }
        }
    }
    return resultArray;
}
