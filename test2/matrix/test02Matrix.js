let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 5, 6, 9, 8, 7, 4, 1, 2, 3

function matri(matrix){
    let right = matrix.length
    let bottom = matrix[0].length - 1
    let left = 0
    let top = 1
    let size = matrix.length * matrix[0].length
    let mat = []
    let cont = 0
    while(mat.length < size){
        cont++
        //           1
        for(let i = top;i <= bottom;i++){
            mat.push(matrix[top][i])
        }
        //
        //  5 6
        //
        top++
        //           2          0
        for(let i = top;i >= left;i--){
            mat.push(matrix[top][i])
        }

        //
        //  5 6
        //7 8 9

        top--
        //           1
        for(let i = top;i > left;i--){
            mat.push(matrix[i][left])
        }

        //
        //4 5 6
        //7 8 9
        top--
        //          0
        for(let i = top;i <= bottom;i++){
            mat.push(matrix[top][i])
        }

        //1 2 3
        //4 5 6
        //7 8 9

    }
    return cont

}

console.log(matri(mat))
