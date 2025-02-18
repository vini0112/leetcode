
let mat = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]

// 5 1 9 11 10 7 16 12 14 15 13 2 4 8 6 3

function spiralMat(matrix){
    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length - 1
    let size = matrix[0].length * matrix.length
    let newMatrix = []

    while(newMatrix < size){

        //           0       4
        for(let i = top;i < right;i++){
            newMatrix.push(matrix[top][i])
        }
        // 5 1 9 11

        top++
        //           1          3
        for(let i = top;i < bottom;i++){
            newMatrix.push(matrix[i][bottom])
        }

        // 5 1 9 11
        //       10
        //       7

        top += 2
        //           3         0
        for(let i = top;i >= left;i--){
            newMatrix.push(matrix[top][i])
        }
        
        //5  1  9  11
        //         10
        //          7
        //15 14 12 16

        top--
        //           2
        for(let i = top;i > left;i--){
            newMatrix.push(matrix[i][left])
        }

        //5  1  9  11
        //2        10
        //13        7
        //15 14 12 16

        top--
        //           1
        for(let i = top;i < bottom;i++){
            newMatrix.push(matrix[top][i])
        }

        //5  1  9  11
        //2  4  8  10
        //13        7
        //15 14 12 16

        top++
        //          2          0
        for(let i = top;i > left;i--){
            // console.log(matrix[top][i])
            newMatrix.push(matrix[top][i])
        }

        //5  1  9  11
        //2  4  8  10
        //13 3  6   7
        //15 14 12 16
    }

    return newMatrix
}

console.log(spiralMat(mat))

