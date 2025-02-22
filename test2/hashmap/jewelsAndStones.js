
let jewels = "aA", stones = "aAAbbbb"

// BRUTE FORCE 

// function hashing(jewels, stones){
//     let cont = 0
//     for(let i = 0;i < stones.length;i++){
//         for(let j = 0;j < jewels.length;j++){
//             if(stones[i] === jewels[j]){
//                 cont++
//             }
//         }
//     }
//     return cont
// }

// console.log(hashing(jewels, stones))


function hashing(jewels, stones){
    let set = new Set(jewels)
    //split separa cada letra -> stone recebe cada letra
    //set.has(stone) -> checa se tem a letra no Set, se tiver somador recebe 1
    return stones.split('').reduce((somador, stone) => somador + set.has(stone), 0)

}

console.log(hashing(jewels, stones))

