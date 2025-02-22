let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Output: [[7,4,1],[8,5,2],[9,6,3]]

function rotateMatrix(matrix){
    // transpose
    let res = []
    for(let i = 0;i < matrix.length;i++){ // looping in rows
        for(let j = i;j < matrix.length;j++){ // looping in cols
            let temp = matrix[i][j] // 1 2 3 5 6 9
            matrix[i][j] = matrix[j][i] // 1 4 7 5 8 9
            matrix[j][i] = temp
            
        }
    }
    // return res
    // reverse

    for(let i = 0;i < matrix.length;i++){
        for(let j = 0;j < matrix.length/2;j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix.length-1-j]
            matrix[i][matrix.length-1-j] = temp
        }
    }

    return matrix


}

console.log(rotateMatrix(matrix))