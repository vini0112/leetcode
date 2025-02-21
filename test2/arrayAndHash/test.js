let prices = [7,1,5,3,6,4]
// BUY THE CHEAPER AND SELL IN THE HIGHT 

// ROMAN NUMBERS
const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

// OVERLAPPING ARRAY

function matrixSpiral(matrix){

    let x = 0
    let y = 0
    let dx = 1
    let dy = 0
    let cols = matrix[0].length
    let rows = matrix.length
    let res = []

    for(let i = 0;i < cols * rows;i++){
        res.push(matrix[y][x])
        matrix[y][x] = "."

    }
    
}



let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matrix2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

// [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(matrixSpiral(matrix2))

