let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Output: [[7,4,1],[8,5,2],[9,6,3]]

function rotateMatrix(matrix){
    // transpose
    
    for(let i = 0;i < matrix.length;i++){ // looping in rows
        for(let j = i;j < matrix.length;j++){ // looping in cols
            // matrix[i][j] = matrix[j][i] e matrix[j][i] = matrix[i][j]
            let temp = matrix[i][j] 
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    // reverse -> used in CounterClockWise
    for(let i = 0;i < matrix.length;i++){
        for(let j = i;j < matrix.length/2;j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix.length-1-j]
            matrix[i][matrix.length-1-j] = temp
        }
    }

    // other reverse -> used in ClockWise

    // for(let row of matrix){
    //     row.reverse()
    // }

    return matrix
}

console.log(rotateMatrix(matrix))


// EASY WAY TO DO 

// function rotate(matrix){
//     let n = matrix.length
//     let rotate = Array.from({length: n}, () =>Array(n).fill(0))

//     for(let i = 0;i < n;i++){
//         for(let j = 0;j < n;j++){
//             //     
//             rotate[j][n - 1 - i] = matrix[i][j]
//         }
//     }

//     return rotate
// }
