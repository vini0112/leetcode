
function fibo(n){
    
    if(n < 2) return n

    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6))
// 0-1-1-2-3-5-8
