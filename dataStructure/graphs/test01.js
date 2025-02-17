
let twoMatrix = [
    [9, 8, 7],
    [5, 3, 2],
    [6, 6, 7]
]

class matrix{
    constructor(string){
        this.Matrix = string.split('/n')
    }

    get row(){
        return this.Matrix.map(row => row.split(' ').map(Number))
    }

    get column(){
        return this.row[0].map((el, i) =>{
            return this.row.map(row => row[i])
        })
    }

}

const mat = new matrix()
mat.Matrix(twoMatrix)
console.log(mat.row())
