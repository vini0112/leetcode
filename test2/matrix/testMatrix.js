let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


// 1 4 7 8 9 6 3 2 5


function matrix(matrix){

    let top = 0
    let left = 0
    let right = matrix[0].length
    let bottom = matrix.length - 1
    let size = matrix.length * matrix[0].length
    let newMat = []
    let cont = 0
    while(newMat.length < size){
        cont++
                    // 0      2
        for(let i = top;i <= bottom;i++){
            newMat.push(matrix[i][left])
        }
        // GRAPH 
        // 1
        // 4
        // 7

        top += 2 // é 2

        //                     2
        for(let i = top; i <= bottom;i++){
            newMat.push(matrix[top][left+1])
        }

        // GRAPH 
        // 1
        // 4
        // 7 8

                //   2         0
        for(let i = top; i >= left;i--){
            newMat.push(matrix[i][top])
        }

        // GRAPH 
        // 1   3
        // 4   6 
        // 7 8 9

        top  -= 2

        //           0          2
        for(let i = top;i < bottom;i++){
            newMat.push(matrix[i][top+1])
        }

        // GRAPH 
        // 1 2 3
        // 4 5 6 
        // 7 8 9

    }
    return cont
}

console.log(matrix(mat))

