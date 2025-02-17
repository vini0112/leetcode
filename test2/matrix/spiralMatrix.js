let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function spiral(matrix){
    let left = 0
    let top = 0
    let right = matrix[0].length
    let bottom = matrix.length - 1
    let size = matrix.length*matrix[0].length
    let nums = []
    let cont = 0
    
    while(nums.length < size){
        
        //               0     3
        for(let i = left;i < right && nums.length < size;i++){ // roda 3x
                        //    0   0
            nums.push(matrix[top][i]) // coloca os tres de cima
        }
        top++ // top vira 1 para descer para row 2

         // GRAPH -> left to right
        // 1 2 3
        



        //           1         2       
        for(let i = top;i < bottom && nums.length < size;i++){ // roda 2x
                                // 3
            nums.push(matrix[i][bottom]) // exibira 3x 
        }
        right-- // diminui 1 de right, ent right == 2

        // GRAPH -> two down
        // 1 2 3
        //     6
        
        

        //             2        0
        for(let i = right;i >= left && nums.length < size;i--){
                    //         2     2
            nums.push(matrix[bottom][i])
        }
        bottom-- // bottom menus um, ent == 1

        // GRAPH -> all from bottom 
        // 1 2 3
        //     6
        // 7 8 9



        //             1         2
        for(let i = bottom;i >= top && nums.length < size;i--){
            nums.push(matrix[i][left])
            
        }
        left++
        // GRAPH -> added 4 and 5
        // 1 2 3
        // 4 5 6
        // 7 8 9
    }
    return cont
}
console.log(spiral(mat))