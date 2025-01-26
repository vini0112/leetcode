

function memoize(fn) {
    let storage = {}
    return function(a, b){
        const key = ([a, b])
        
        if(key in storage){
            return `Existe já -> ${storage[key]}`
        }

        const result = fn(a, b)
        storage[key] = result
        return `criado agora -> ${result}`
    }
    
}
let fn = (a, b) => (a + b)
const memorize = memoize(fn)

console.log(memorize(2, 4))
console.log(memorize(2, 4))
console.log(memorize(2, 1))
console.log(memorize(2, 1))

