let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let mat2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

let mat3 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
    [17,18,19,20],
    [21,22,23,24]]


function spiral(matrix){
    let left = 0
    let top = 0
    let right = matrix[0].length-1
    let bottom = matrix.length - 1
    let size = matrix.length*matrix[0].length
    let nums = []
    
    while(nums.length < size){
        // primeira fila
        for(let i = left;i <= right && nums.length < size;i++){
            nums.push(matrix[top][i])
        }

        top++ // 1

        // desce da direita
        for(let i = top;i <= bottom && nums.length < size;i++){
            nums.push(matrix[i][right])
        }

        right-- // 1

        if(top <= bottom){
            // last row
            for(let i = right;i >= left && nums.length < size;i--){
                nums.push(matrix[bottom][i])
            }
            bottom-- 
        }
        
        if(left <= right){
        // going up in the last bound 
            for(let i = bottom;i >= top && nums.length < size;i--){
                nums.push(matrix[i][left])
            } 
            left++
        }

    }

    return nums
}


console.log(spiral(mat2))

// var spiralOrder = function(matrix) {

//     let left = 0
//     let top = 0
//     let right = matrix[0].length-1
//     let bottom = matrix.length - 1
//     let size = matrix.length*matrix[0].length
//     let nums = []
    
//     while(nums.length < size){

//         for(let i = left;i <= right && nums.length < size;i++){
//             nums.push(matrix[top][i])
//         }

//         top++ // 1

//         for(let i = top;i <= bottom && nums.length < size;i++){
//             nums.push(matrix[i][right])
//         }

//         right-- // 1

//         for(let i = right;i >= left && nums.length < size;i--){
//             nums.push(matrix[bottom][i])
//         }

//         bottom--
        
//         for(let i = bottom;i >= top && nums.length < size;i--){
//             nums.push(matrix[i][left])
//         }
//         left++
//     }

//     return nums
    
// };

