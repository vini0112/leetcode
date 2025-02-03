


function sequenciaFibonasi(n){
    if(n < 2) return false
    let fib = [0, 1]

    for(let i = 2;i <= n;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}   

console.log(sequenciaFibonasi(3))


