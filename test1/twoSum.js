
// ARRAY PROTOTYPE  

// Array.prototype.last = function() {
//     if (this.length === 0) {
//         return -1;
//     } else {
//         return this.length
//     }
// };
// let arrays = [null, {}, 3]

// console.log(arrays.last())


// maneira facil
function twoSum(nums, target){
    let comb = []
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            
            if(nums[i] + nums[j] == target){
                comb.push([i, j])
            }
        }
    }

    if(comb.length == 0){
        return console.log('Nenhuma das somas é igual ao target!')
    }

    return console.log(comb)
}



// maneira dificil

// explicacao
// 1ª inicia um map vazio
// 2ª faz um loop no array com FOR
// 3ª obtem o complemento -> que o valor que somado com o valor atual dá o target!
// 4ª funcao IF para Verificar se o complemento já está no Map
// Se sim, retorne os índices do número atual e do complemento.
// Se não, armazene o número atual e seu índice no Map

// OBS: Em nenhum momento ele salva o complemento! e sim, o numero da posicao -> nums[i] e seu indice -> i. o map.has(complement) apenas ver se ja foi guardado algum valor igual ao valor do complement!



function TWOSUM(nums, target){
    let map = new Map()

    let results = []

    for(let i = 0; i < nums.length;i++){
        const complement = target - nums[i];
        
        if(map.has(complement)){
            results.push([map.get(complement), i]);
        }
        map.set(nums[i], i);
    }

    if(results.length == 0){
        return 'Nenhuma das somas é igual ao target!'
    }

    return results
}



let nums = [9, 11, 9, 7]
let target = 20


// twoSum(nums, target)
// console.log(TWOSUM(nums, target))
// TWOSUM(nums, target)


