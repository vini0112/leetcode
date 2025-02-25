
let board = [
    [
    '5', '3', '0',
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

function sudoku(board){
    let row = Array.from({length: 9}, () => new Set())
    let col = Array.from({length: 9}, () => new Set())
    let boxes = Array.from({length: 9}, () => new Set())



    for(let i = 0;i < board.length;i++){
        for(let j = 0;j < board.length;j++){
            if(board[i][j] === "."){
                continue
            }


            let value = board[i][j]
            let boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3) // get the box index 3x3

            if(row[i].has(value) || col[j].has(value) || boxes[boxIndex].has(value)) return false

            row[i].add(value)
            col[j].add(value)
            boxes[boxIndex].add(value)
        }
    }
    return true
}


console.log(sudoku(board))
