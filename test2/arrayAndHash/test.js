
// RETURNING THE BIGGEST ONE
let nums = [8 ,-4,-2, 1]

function biggest(nums){
    return nums.reduce((bigger, num) =>{
        if(num > bigger){
            return num
        }
        return bigger
    })
}

// console.log(biggest(nums))

// RETURNING THE CLOSEST TO A DETERMINE NUM

let target = 5

function closestFive(nums, target){
    return nums.reduce((closest, num) =>{
        if(Math.abs(num - target) < Math.abs(closest - target)){
            return num
        }
        return closest
    })
}

console.log(closestFive(nums, target))
