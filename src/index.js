
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if ( matrix === undefined || matrix.length === 0) {
    return result;
  } 

    for (i = 0; i < matrix.length; i++) {
        if ( i % 2 === 0 ) {
            for ( j = 0; j < (matrix[i]).length; j++) {
                let elem = matrix[i][j];
                result.push(elem);
            }
        } else {
            for ( j = (matrix[i]).length - 1; j >= 0; j-- ) {
                let elem = matrix[i][j];
                result.push(elem);
            }
        }
    }
    return result;
}
