
let nums = [100,4,200,1,3,2] // 4
let nums2 = [0,3,7,2,5,8,4,6,0 ,1] // 9
let nums3 = [9,1,4,7,3,-1,0,5,8,-1,6] // 7


function longest(nums){
    let cont = 1
    let max = 0
    nums.sort((a, b) => a - b)

    if(nums.length === 0) return 0
    for(let i = 1;i < nums.length;i++){
        if(nums[i] !== nums[i-1]){ // se diferentes 
            if(nums[i] === nums[i-1] + 1){ //diferentes mas se somado o prev mais 1 ficam iguais!
                cont++
            }else{
                max = Math.max(max, cont)
                cont = 1 // caso de um numero nao cosecutivo, ex: nums3 falta o 2 e precisamos continuar contando..
            }
        }
    }
    return Math.max(max, cont)
}

// console.log(longest(nums))
