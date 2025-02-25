
// HARD WAY TO BUILD

let board = [
    [
      '5', '3', '.',
      '.', '7', '.',
      '.', '.', '.'
    ],
    [
      '6', '.', '.',
      '1', '9', '5',
      '.', '.', '.'
    ],
    [
      '.', '9', '8',
      '.', '.', '.',
      '.', '6', '.'
    ],
    [
      '8', '.', '.',
      '.', '6', '.',
      '.', '.', '3'
    ],
    [
      '4', '.', '.',
      '8', '.', '3',
      '.', '.', '1'
    ],
    [
      '7', '.', '.',
      '.', '2', '.',
      '.', '.', '6'
    ],
    [
      '.', '6', '.',
      '.', '.', '.',
      '2', '8', '.'
    ],
    [
      '.', '.', '.',
      '4', '1', '9',
      '.', '.', '5'
    ],
    [
      '.', '.', '.',
      '.', '8', '.',
      '.', '7', '9'
    ]
]
let EMPTY = "."
let possibleNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function sudoku(board){
    
    let emptySpace = []
    for(let i = 0;i < board.length;i++){
        for(let j = 0;j < board.length;j++){
            if(board[i][j] === EMPTY){ // finding empty spaces
                emptySpace.push({row: i, col: j})
            }
        }
    }

    function recurse(emptySpaceIndex){
        // base case - end
        if(emptySpaceIndex >= emptySpace.length){ // emptySpace.length are all the "." spaces
            return true
        }

        const {row, col} = emptySpace[emptySpaceIndex]

        for(let i = 0;i < possibleNums.length;i++){
            let num = possibleNums[i]
            if(isValid(num, row, col, board)){
                board[row][col] = num

                // recurse to move to the next position
                if(recurse(emptySpaceIndex+1)){
                    return true
                }
                // backtrack
                board[row][col] = EMPTY
            }
        }
        return false
    }
    recurse(0) // this will be incremented by one at each interation
    return board
}

function isValid(number, row, col, board){
    // check col, row, 3x3 matrix
    for(let i = 0;i < board.length;i++){
        // checking the colums and 
        if(board[row][i] === number || board[i][col] === number){
            return false
        }

        let subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3)
        let subCol = 3 * Math.floor(row / 3) + (i % 3)

        if(board[subRow][subCol] === number) return false

    }
    return true
}

console.log(sudoku(board))
// console.log(board.length)

