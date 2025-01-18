
var createCounter = function(n) {
    return function(){
        return n++
    }
};

let n = 10
const contador = createCounter(n)

console.log(contador())
console.log(contador())
console.log(contador())

