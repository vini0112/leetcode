
function creatingMatrix(rows, cols){
    let matrix = []
    for(let i = 0;i < rows;i++){
        let row = new Array(cols).fill(8)
        matrix.push(row)
    }
    return matrix
}

// console.log(creatingMatrix(3, 3))


let mat = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
];
 // total 45
function readingMatrix(matrix){
    matrix.forEach(row => console.log(row.join(' ')))
}

// readingMatrix(mat)


//  SUMMING VALUES
function summing(matrix){
    let total = 0
    for(let row of matrix){
        for(let num of row){
            total += num
        }
    }
    return total
}

// console.log(summing(mat))




// rewriting the matrix
function transpose(matrix){
    let rows = matrix.length
    let cols = matrix[0].length
    let transpose = []
    
    for(let i = 0;i < cols;i++){
        let newRow = []
        for(let j = 0;j < rows;j++){
            newRow.push(matrix[i][j])
        }
        transpose.push(newRow)
    }
    return transpose
}

console.log(transpose(mat))
