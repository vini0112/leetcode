
const arr = [1, 4, 6, 7]

Array.prototype.last = function(){
    return this.length > 0 ? this[this.length - 1] : undefined
}



console.log(arr.last())

