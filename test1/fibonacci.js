


function sequenciaFibonasi(n){

    if(n <= 0){
        return n
    } 

    let a = 0, b = 1

    for(let i = 2;i <= n;i++){
        let temp = a + b
        a = b
        b = temp
    }

    return b
}   

console.log(10)
