
let nums = [1,2,3,1]

function containsDupli(nums){
    let map = new Map()

    for(let i = 0;i < nums.length;i++){
        if(map.has(nums[i])){
            return true
        }

        map.set(nums[i])
    }
    return false

}

console.log(containsDupli(nums))
