
function tupla(arr){
    let products = new Map()
    let cont = 0
    for(let i = 0;i < arr.length;i++){
        for(let j = i+1;j < arr.length;j++){
            let multi = arr[i] * arr[j]
            cont += 8 * (products.get(multi) || 0)
            products.set(multi, (products.get(multi) || 0) +1)
        }
        
    }
    return cont
}

console.log(tupla([2,3,4,6]))

