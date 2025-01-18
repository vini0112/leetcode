
let createCounter = function(init){
    let init2 = init
    return{
        increment: () => init2 += 1,
        
        decrement: () => init2 -= 1,
        
        reset: () => init
        
    }
}

const counter = createCounter(6)

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())