

function memoize(fn) {
    let seen = []
    let storage = []
    return{
        memory: (a, b) =>{
            
            storage.push([a, b])

            for(let i = 0;i < storage.length;i++){
                if(storage[i] == [a, b]){
                    // seen.push(1)
                    console.log(storage[i])
                }
            }
            
            return fn(a, b)
            
        },

        allSeen: () => {
            return seen
        }
    }
}
let fn = (a, b) => (a + b)
const memorize = memoize(fn)
memorize.memory(1, 2)
memorize.memory(1, 2)

// console.log(memorize.memory(1, 2))
// console.log(memorize.memory(1, 2))
console.log(memorize.allSeen())
