
// TWO SUM II - U HAVE TO RETURN THE INDEXS OF THE SUM 

let numbers = [7,11,2,15], target = 9

// NOT THE BEST CODE
function twoSum(nums, targ){
    let map = new Map()
    for(let i = 0;i < nums.length;i++){
        let rest = targ - nums[i] 
        if(map.has(rest)){
            return [map.get(rest), i+1]
        }

        map.set(nums[i], i+1)
    }
    return map
}

// console.log(twoSum(numbers, target))

// A BETTER APPROACH - O(n)

function twoSum2(nums, targ){
    let left = 0
    let right = nums.length - 1

    while(left < right){ // nao se igualam 
        let total = nums[left] + nums[right]

        if(total === targ){
            return [left + 1, right + 1] // returna os indices
        }
        else if(total > targ){ // se total > 9 andamos do ultimo pra esquerda
            right--
        }
        else{  // se total < 9 andamos da esqueda pra direita
            left++
        }
    }
    return false // se target nao encontrado

}

console.log(twoSum2(numbers, target))

