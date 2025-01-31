
const arr = [1, 4, 6, 7]

Array.prototype.last = function(){
    return this.length > 0 ? this[this.length - 1] : undefined
// return this.length > 0 ? this.at(-1) : undefined
}



console.log(arr.last())
// console.log(arr.at(-1))
// console.log(arr.slice(-1)[0])




// Array.prototype.indexOf = function(elemento, inicio = 0){
//     for(let i = inicio;i < this.length;i++){
//         if(this[i] === elemento){
//             return i
//         }
//     }
//     return -1
// }

// let nums = [1, 2, 9, 4]

// console.log(nums.indexOf(1))
