



let once = (fn) => {
    let cont = 0
    return (a, b, c) =>{

        if(cont == 0){
            cont += 1
            return fn(a, b, c)
        }
        return 'undefined, fn was not called'
    }
}   

let fn = (a, b, c) => (a + b + c)
let fn2 = (a, b, c) => (a * b * c)

const chamando = once(fn)
const multi = once(fn)

console.log(chamando(1, 2, 3))
console.log(chamando(1, 2, 4))
// console.log(chamando(1, 2, 4))

